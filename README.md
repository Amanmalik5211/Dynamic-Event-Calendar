# React Calendar with Event Management

A React app that allows users to view and manage events in a calendar view. Users can add, edit, and delete events on any selected date, with an interactive modal to manage the event details.

---

## Features

- **Calendar View**:  
  Displays a monthly calendar where each day is clickable.

- **Event Management**:  
  Add, edit, and delete events for any selected date.

- **Event Modal**:  
  A modal allows users to add or edit event details.

- **Responsive Design**:  
  Mobile-friendly design that adapts to different screen sizes.

- **Event Highlighting**:  
  Dates with events are highlighted with a different background color.

- **Event List**:  
  Multiple events on a single day are listed and can be managed through the modal.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amanmalik5211/Dynamic-Event-Calendar.git
   cd dynamic-event-calendar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the app**:
   ```bash
   npm run dev
   ```

4. **Open the app**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Technologies

- **React**: For building the user interface.
- **Vite**: For fast builds and hot module replacement.
- **Tailwind CSS**: For styling the application.
- **JavaScript/TypeScript**: For development and functionality.
- **React Modal**: For displaying the modal to add or edit events.

---

## Enhancements

- **Event Modal**:  
  Users can add, edit, or delete events directly through a modal, providing an easy and intuitive interface.

- **Date Highlighting**:  
  Dates that contain events are visually distinguished by a different background color to make them easily identifiable.

- **Event List with Pagination**:  
  For days with multiple events, they are displayed in a paginated list to avoid clutter and improve management.

- **Responsive Design**:  
  The calendar and modal are fully responsive, ensuring that the app works seamlessly across both desktop and mobile devices.

---

## How It Works

### Calendar:
The calendar displays the current month's days. Clicking a day opens a modal with event details for that day.

### Modal:
The modal allows users to add, edit, or delete events. When adding or editing, users can input event details such as name, description, and start/end times.

### Event Management:
The events are stored in the state and associated with a date. Each event can be managed efficiently through the modal interface.
