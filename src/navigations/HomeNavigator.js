import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/Provider';
import Icon from '../components/common/icon';
import {TouchableOpacity} from 'react-native';
import {goBack} from './SideMenu/RootNavigator';

const HomeNavigator = () => {
  const {authDispatch} = useContext(GlobalContext);

  const getDrawerNavigation = (navigation, authDispatch) => {
    return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
  };

  const HomeStack = createDrawerNavigator();

  const onBackPress = () => {
    return (
      <TouchableOpacity onPress={() => goBack()}>
        <Icon
          type="ionicon"
          style={{paddingLeft: 10}}
          size={25}
          name="arrow-back"
        />
      </TouchableOpacity>
    );
  };

  return (
    <HomeStack.Navigator
      drawerType={'front'}
      drawerContent={({navigation}) =>
        getDrawerNavigation(navigation, authDispatch)
      }
      initialRouteName={CONTACTS_LIST}>
      <HomeStack.Screen
        name={CONTACTS_LIST}
        component={Contacts}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name={CONTACTS_DETAILS}
        component={ContactsDetails}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: onBackPress,
        }}
      />
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContacts}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: onBackPress,
        }}
      />
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: onBackPress,
        }}
      />
      <HomeStack.Screen name={LOGOUT_USER} component={Logout} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
