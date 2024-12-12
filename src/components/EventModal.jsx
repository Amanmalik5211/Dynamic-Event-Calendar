import  { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.css';

const EventModal = ({ date, onClose, onSave, events, onEdit, onDelete }) => {
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    startTime: '',
    endTime: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      onEdit(date.toDateString(), editingIndex, newEvent);
      setEditingIndex(null);
    } else {
      onSave(newEvent);
    }
    setNewEvent({ name: '', description: '', startTime: '', endTime: '' });
  };

  const handleEditClick = (event, index) => {
    setNewEvent(event);
    setEditingIndex(index);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Events on {date?.toDateString()}</h3>

        {events.length > 0 ? (
          <div className="event-list">
            {events.map((event, index) => (
              <div key={index} className="event-item">
                <p><strong>{event.name}</strong></p>
                <p>{event.startTime} - {event.endTime}</p>
                <p>{event.description}</p>
                <div className="event-actions">
                  <button onClick={() => handleEditClick(event, index)}>Edit</button>
                  <button onClick={() => onDelete(date.toDateString(), index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No events for this day.</p>
        )}

        <div className="new-event">
          <h4>{editingIndex !== null ? 'Edit Event' : 'Add New Event'}</h4>
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={newEvent.name}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="startTime"
            value={newEvent.startTime}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="endTime"
            value={newEvent.endTime}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={newEvent.description}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleSave}>{editingIndex !== null ? 'Update Event' : 'Add Event'}</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

EventModal.propTypes = {
  date: PropTypes.instanceOf(Date),
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EventModal;
