import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://65095e60f6553137159b499e.mockapi.io'
});

export default baseUrl;