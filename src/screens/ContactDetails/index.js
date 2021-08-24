import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/icon';
import ContactDetailComponent from '../../components/ContactDetailComponent';
import {CONTACTS_DETAILS, CONTACTS_LIST} from '../../constants/RouteNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import editContact from '../../context/actions/contacts/editContact';
import {GlobalContext} from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';
import {navigate} from '../../navigations/SideMenu/RootNavigator';

const ContactsDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {setOptions} = useNavigation([]);
  const {
    contactsDispatch,
    contactsState: {
      deleteContacts: {loading},
    },
  } = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const [localFile, setlocalFile] = useState(null);
  const [updatingImage, setupdatingImage] = useState(false);

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
    console.log('images :>> ', image);
    closeSheet();
    setlocalFile(image);
    setupdatingImage(true);

    uploadImage(image)(url => {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        country_code: countryCode,
        is_favorite: isFavorite,
      } = item;
      editContact(
        {
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          countryCode,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatch)(item => {
        setupdatingImage(false);
        ToastAndroid.show('Image uploaded successfuly', ToastAndroid.SHORT);
      });
    })(err => {
      console.log('err :>> ', err);
      setupdatingImage(false);
    });
  };

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingEnd: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Icon
                  size={24}
                  // color={colors.grey}
                  name={item.isFavourite ? 'star' : 'star-border'}
                  type="material"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => {
                  Alert.alert(
                    'Delete Contact!',
                    `Are you sure you want to remove ${
                      item.first_name + ' ' + item.last_name
                    } ?`,
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'Ok',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACTS_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <Icon
                    size={24}
                    // color={colors.grey}
                    name="delete"
                    type="material"
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

  return (
    <ContactDetailComponent
      contact={item}
      sheetRef={sheetRef}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
      updatingImage={updatingImage}
    />
  );
};

export default ContactsDetails;
