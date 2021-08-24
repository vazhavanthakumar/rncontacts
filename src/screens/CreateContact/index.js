import React, {useState, useContext, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import CreateContactsComponent from '../../components/CreateContactsComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CONTACTS_DETAILS, CONTACTS_LIST} from '../../constants/RouteNames';
import {useRef} from 'react';
import uploadImage from '../../helpers/uploadImage';
import countryCodes from '../../utils/countryCodes';
import editContact from '../../context/actions/contacts/editContact';

const CreateContacts = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate, setOptions} = useNavigation();
  const sheetRef = useRef(null);
  const [localFile, setlocalFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.contact) {
      setOptions({title: 'Update Contact'});

      const {
        first_name: firstName,
        phone_number: phoneNumber,
        last_name: lastName,
        is_Favorite: isFavourite,
        country_code: countryCode,
      } = params?.contact;

      setForm({
        ...form,
        firstName,
        lastName,
        phoneNumber,
        isFavourite,
        phoneCode: countryCode,
      });

      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === countryCode;
      });

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            countryCode: country.key.toUpperCase(),
          };
        });
      }
      if (params?.contact?.contact_picture) {
        setlocalFile(params?.contact?.contact_picture);
      }
    } else {
      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === '91';
      });

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            countryCode: country.key.toUpperCase(),
          };
        });
      }
    }
  }, []);

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
    if (params?.contact) {
      if (localFile?.size) {
        setUploading(true);
        uploadImage(localFile)(url => {
          setUploading(false);
          editContact(
            {...form, contactPicture: url},
            params?.contact.id,
          )(contactsDispatch)(data => {
            navigate(CONTACTS_DETAILS, {item: data});
          });
        })(err => {
          setUploading(false);
          console.log('error :>> ', err);
        });
      } else {
        editContact(form, params?.contact?.id)(contactsDispatch)(data => {
          navigate(CONTACTS_DETAILS, {item: data});
        });
      }
    } else {
      if (localFile?.size) {
        setUploading(true);
        uploadImage(localFile)(url => {
          setUploading(false);
          console.log('url :>> ', url);
          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACTS_LIST);
            },
          );
        })(err => {
          setUploading(false);
          console.log('error :>> ', err);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACTS_LIST);
        });
      }
    }
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

  const onFileSelected = image => {
    closeSheet();
    setlocalFile(image);
    console.log('images :>> ', image);
  };

  return (
    <CreateContactsComponent
      form={form}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading || uploading}
      error={error}
      toggleValueChanged={toggleValueChanged}
      errors={errors}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContacts;
