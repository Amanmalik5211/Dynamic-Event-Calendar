import { useState } from 'react';
import '../styles/calendar.css';
import EventModal from './EventModal';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getDaysInMonth = (year, month) => {
    return new Array(new Date(year, month + 1, 0).getDate())
      .fill(null)
      .map((_, index) => new Date(year, month, index + 1));
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => {
      const dateKey = selectedDate.toDateString();
      return {
        ...prevEvents,
        [dateKey]: [...(prevEvents[dateKey] || []), newEvent],
      };
    });
    setShowModal(false);
  };

  const handleEditEvent = (dateKey, updatedEventIndex, updatedEvent) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...(prevEvents[dateKey] || [])];
      updatedEvents[updatedEventIndex] = updatedEvent;
      return {
        ...prevEvents,
        [dateKey]: updatedEvents,
      };
    });
  };

  const handleDeleteEvent = (dateKey, eventIndex) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...(prevEvents[dateKey] || [])];
      updatedEvents.splice(eventIndex, 1);
      return {
        ...prevEvents,
        [dateKey]: updatedEvents,
      };
    });
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>&lt; Previous</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentYear}
        </h2>
        <button onClick={handleNextMonth}>Next &gt;</button>
      </div>

      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}

        {new Array(firstDayOfWeek).fill(null).map((_, index) => (
          <div key={index} className="calendar-day empty"></div>
        ))}

        {daysInMonth.map((date) => {
          const dateKey = date.toDateString();
          const hasEvent = events[dateKey] && events[dateKey].length > 0;

          return (
            <div
              key={dateKey}
              className={`calendar-day ${hasEvent ? 'has-event' : ''}`}
              onClick={() => handleDayClick(date)}
            >
              {date.getDate()}
              <div className="events-summary">
                {(events[dateKey] || []).map((event, index) => (
                  <div key={index} className="event-item">
                    {event.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showModal && (
        <EventModal
          date={selectedDate}
          onClose={() => setShowModal(false)}
          onSave={handleAddEvent}
          events={events[selectedDate?.toDateString()] || []}
          onEdit={handleEditEvent}
          onDelete={handleDeleteEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
