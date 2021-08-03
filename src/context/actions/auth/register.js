import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch => {
    dispatch({type: REGISTER_LOADING});

    axiosInstance
      .post('auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(response => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
        console.log('resonse :>> ', response.data);
      })
      .catch(error => {
        dispatch({
          type: REGISTER_FAIL,
          payload: error.response
            ? error.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
