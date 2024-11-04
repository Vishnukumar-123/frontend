import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
};
