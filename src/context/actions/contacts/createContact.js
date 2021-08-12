import {
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  CREATE_CONTACTS_FAIL,
} from '../../../constants/actionTypes/index';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default form => dispatch => onSuccess => {
  const reqCreateContact = {
    country_code: form.countryCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: true,
  };
  dispatch({
    type: CREATE_CONTACTS_LOADING,
  });
  axiosInstance
    .post('/contacts', reqCreateContact)
    .then(response => {
      console.log('create contact response :>> ', response.data);
      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: response.data,
      });
      onSuccess();
    })
    .catch(error => {
      console.log('errors :>dsaaasfasd> ', error);
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
