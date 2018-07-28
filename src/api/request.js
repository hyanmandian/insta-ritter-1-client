import axios from 'axios';

const request = axios.create({
  baseURL: process.env.API,
});

request.interceptors.response.use(({ data: { data }, ...response }) => ({ ...response, data }), Promise.reject);

export default request;
