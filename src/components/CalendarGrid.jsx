import PropTypes from 'prop-types';
import { startOfMonth, endOfMonth, startOfWeek, addDays, isSameDay, isToday } from 'date-fns';
import { clsx } from 'clsx';
import '../styles/CalendarGrid.css';

const CalendarGrid = ({ currentDate, onDateClick, selectedDate }) => {
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = startOfWeek(endOfMonth(currentDate), { weekStartsOn: 6 });
  const days = [];

  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="calendar-container">
      {/* Header for days of the week */}
      <div className="days-header">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName, index) => (
          <div key={index} className="day-name">
            {dayName}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="days-grid">
        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => onDateClick(day)}
            className={clsx('day', {
              weekend: day.getDay() === 0 || day.getDay() === 6, // Highlight weekends
              today: isToday(day), // Highlight today's date
              selected: isSameDay(day, selectedDate), // Highlight the selected day
              'other-month': day.getMonth() !== currentDate.getMonth(), // Differentiate days from other months
            })}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

CalendarGrid.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  onDateClick: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
};

export default CalendarGrid;
