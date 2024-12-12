import { useState } from 'react';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import EventSidePanel from './components/EventSidePanel';
import './styles/global.css';

function App() {
  const [events, setEvents] = useState([]); // List of all events
  const [selectedDate, setSelectedDate] = useState(null); // Currently selected date
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false); // State for side panel visibility

  // Handle adding a new event
  const handleAddEvent = (event) => {
    setEvents([...events, event]);
  };

  // Toggle the event side panel
  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  // Filter events for the selected date
  const eventsForSelectedDate = selectedDate
    ? events.filter((event) => event.date === selectedDate)
    : events;

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Calendar
          events={events}
          onDateSelect={setSelectedDate}
          onAddEvent={handleAddEvent}
        />
        <button
          className="toggle-panel-btn"
          onClick={toggleSidePanel}
        >
          {isSidePanelOpen ? 'Hide All Events' : 'Show All Events'}
        </button>
        {isSidePanelOpen && (
          <EventSidePanel
            events={selectedDate ? eventsForSelectedDate : events}
            onClose={toggleSidePanel}
          />
        )}
      </div>
    </div>
  );
}

export default App;
