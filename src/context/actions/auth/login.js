import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default ({password, userName: username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});

    axiosInstance
      .post('auth/login', {password, username})
      .then(response => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });

        AsyncStorage.setItem('token', response.data.token);
        AsyncStorage.setItem('user', JSON.stringify(response.data.user));

        console.log('resonse :>> ', response.data);
      })
      .catch(error => {
        console.log('errors :>dsaaasfasd> ', error);
        dispatch({
          type: LOGIN_FAIL,
          payload: error.response
            ? error.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
