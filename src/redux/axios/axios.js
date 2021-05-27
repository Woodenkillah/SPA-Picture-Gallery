import axios from 'axios';
import {AxiosSettings} from '../../constants';

export const createAPI = () => {

  const api = axios.create({
    baseURL: AxiosSettings.BASE_URL,
    timeout: AxiosSettings.TIMEOUT,
    withCredentials: true
  })

  const onSuccess = response => response;
  const onFail = err => {throw err};

  api.interceptors.response.use(onSuccess, onFail);

  return api;

};
