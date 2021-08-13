import React, {useState, useContext} from 'react';
import {ToastAndroid} from 'react-native';
import CreateContactsComponent from '../../components/CreateContactsComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {useNavigation} from '@react-navigation/native';
import {CONTACTS_LIST} from '../../constants/RouteNames';
import {useRef} from 'react';

const CreateContacts = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const sheetRef = useRef(null);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a firstName'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a lastname'};
      });
    }
    if (!form.phoneNumber) {
      setErrors(prev => {
        return {...prev, phoneNumber: 'Please add a phone number'};
      });
    }
    if (!form.countryCode) {
      ToastAndroid.show('Please add a country code', ToastAndroid.SHORT);
      return;
    }
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACTS_LIST);
    });
  };

  const toggleValueChanged = () => {
    setForm({...form, isFavourite: !form.isFavourite});
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  return (
    <CreateContactsComponent
      form={form}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading}
      error={error}
      toggleValueChanged={toggleValueChanged}
      errors={errors}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
    />
  );
};

export default CreateContacts;
