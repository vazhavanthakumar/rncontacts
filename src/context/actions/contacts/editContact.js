import {
  EDIT_CONTACTS_LOADING,
  EDIT_CONTACTS_SUCCESS,
  EDIT_CONTACTS_FAIL,
} from '../../../constants/actionTypes/index';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default (form, id) => dispatch => onSuccess => {
  const reqCreateContact = {
    country_code: form.countryCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavourite || false,
  };
  console.log('reqEditContact :>> ', reqCreateContact, id);

  dispatch({
    type: EDIT_CONTACTS_LOADING,
  });
  axiosInstance
    .put(`/contacts/${id}`, reqCreateContact)
    .then(response => {
      console.log('edit contact response :>> ', response.data);
      dispatch({
        type: EDIT_CONTACTS_SUCCESS,
        payload: response.data,
      });
      onSuccess(response.data);
    })
    .catch(error => {
      console.log('errors :>dsaaasfasd> ', error);
      dispatch({
        type: EDIT_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
