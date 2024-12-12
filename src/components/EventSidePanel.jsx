import PropTypes from 'prop-types';
import '../styles/EventSidePanel.css';

const EventSidePanel = ({ events, onClose }) => {
  // Log events to check if data is passed correctly
  console.log('Events passed to side panel:', events);

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const eventDate = new Date(event.date).toDateString(); // Ensure event.date is valid
    if (!acc[eventDate]) {
      acc[eventDate] = [];
    }
    acc[eventDate].push(event);
    return acc;
  }, {});

  return (
    <div className="side-panel">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2 className="side-panel-title">Events This Month</h2>
      {Object.keys(groupedEvents).length > 0 ? (
        <ul className="event-list">
          {Object.keys(groupedEvents).map((date, index) => (
            <li key={index} className="event-group">
              <h3 className="event-date">{date}</h3>
              <ul>
                {groupedEvents[date].map((event, idx) => (
                  <li key={idx} className="event-item">
                    <strong className="event-name">{event.name}</strong>
                    <p className="event-time">
                      {new Date(event.startTime).toLocaleTimeString()} -{' '}
                      {new Date(event.endTime).toLocaleTimeString()}
                    </p>
                    <p className="event-description">{event.description}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-events">No events scheduled for this month.</p>
      )}
    </div>
  );
};

EventSidePanel.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired, // Should be a valid date string
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  onClose: PropTypes.func.isRequired,
};

export default EventSidePanel;
