import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.labsobral.com.br',
});

export default api;
