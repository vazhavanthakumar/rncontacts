import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACTS_LIST,
  CONTACTS_DETAILS,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/RouteNames';
import Contacts from '../screens/Contacts/index';
import ContactsDetails from '../screens/ContactDetails/index';
import CreateContacts from '../screens/CreateContact/index';
import Settings from '../screens/Settings/index';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACTS_LIST}>
      <HomeStack.Screen name={CONTACTS_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACTS_DETAILS} component={ContactsDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContacts} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
