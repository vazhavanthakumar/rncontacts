import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';
import {CREATE_CONTACT, LOGOUT_USER} from '../constants/RouteNames';
import {navigate} from '../navigations/SideMenu/RootNavigator';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log('axios instance error ', error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error =>
    new Promise((resolve, reject) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        navigate(LOGOUT_USER, {tokenExpired: true});
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }),
);

export default axiosInstance;
