import { useState } from 'react';
import PropTypes from 'prop-types';

const EventList = ({ events }) => {
  const [filter, setFilter] = useState('');

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(filter.toLowerCase()) ||
    (event.description && event.description.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="event-list">
      <input
        type="text"
        placeholder="Search events..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="search-input"
      />
      <ul>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.name}</strong> ({event.startTime} - {event.endTime})
              <p>{event.description}</p>
            </li>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </ul>
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default EventList;
