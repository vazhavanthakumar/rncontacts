import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACTS_LIST,
  CONTACTS_DETAILS,
  CREATE_CONTACT,
  SETTINGS,
  LOGOUT_USER,
} from '../constants/RouteNames';
import Contacts from '../screens/Contacts/index';
import ContactsDetails from '../screens/ContactDetails/index';
import CreateContacts from '../screens/CreateContact/index';
import Settings from '../screens/Settings/index';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACTS_LIST}>
      <HomeStack.Screen
        name={CONTACTS_LIST}
        component={Contacts}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name={CONTACTS_DETAILS}
        component={ContactsDetails}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContacts}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen name={LOGOUT_USER} component={Logout} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
