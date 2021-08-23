import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionTypes';

export default () => dispatch => {
  // AsyncStorage.removeItem('token');
  // AsyncStorage.removeItem('user');
  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => {
      dispatch({
        type: LOGOUT_USER,
      });
      console.log('resonse :>>datas are removed logout done');
    });
};
