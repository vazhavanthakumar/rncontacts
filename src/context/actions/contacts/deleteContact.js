import {
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
} from '../../../constants/actionTypes/index';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default id => dispatch => onSuccess => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
  });
  axiosInstance
    .delete(`/contacts/${id}`)
    .then(response => {
      console.log('response.data :>> ', response.data);
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch(error => {
      console.log('errors :>dsaaasfasd> ', error);
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
