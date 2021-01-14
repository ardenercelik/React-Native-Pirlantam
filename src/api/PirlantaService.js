import axios from 'axios';

const pirlantaInstance = axios.create({
  baseURL: 'http://192.168.0.106:5000/api/Pirlantas',
  timeout: 1000,
});

export default {
  query(params) {
    return pirlantaInstance.get('/query', {
      params: params,
    });
  },
};
