import {
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
} from '../../../constants/actionTypes/index';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });
  axiosInstance
    .get('/contacts')
    .then(response => {
      console.log('response.data :>> ', response.data);
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      console.log('errors :>dsaaasfasd> ', error);
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
