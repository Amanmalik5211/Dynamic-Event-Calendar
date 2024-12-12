import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/events' });

export const fetchEvents = () => API.get('/');
export const createEvent = (eventData) => API.post('/', eventData);
export const updateEvent = (id, updatedData) => API.put(`/${id}`, updatedData);
export const deleteEvent = (id) => API.delete(`/${id}`);
