import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useState, useEffect, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/icon/index';
import ContactsComponent from '../../components/ContactsComponent';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../../navigations/SideMenu/RootNavigator';
import {CONTACTS_DETAILS} from '../../constants/RouteNames';

const Contacts = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef([]);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useEffect(() => {
    const previous = contactsRef.current;

    contactsRef.current = data;

    const newList = contactsRef.current;

    if (newList.length - previous.length === 1) {
      const newContacts = newList.find(
        contact => !previous.map(i => i.id).includes(contact.id),
      );
      navigate(CONTACTS_DETAILS, {item: newContacts});
      console.log('newContacts :>> ', newContacts);
    }
  }, [data.length]);

  useFocusEffect(
    React.useCallback(() => {
      getSettings();

      return () => {};
    }, []),
  );

  React.useEffect(() => {
    setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              toggleDrawer();
            }}>
            <Icon
              type="material"
              style={{paddingLeft: 10}}
              size={25}
              name="menu"
            />
          </TouchableOpacity>
        );
      },
    });
  }, []);
  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
