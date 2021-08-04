import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/RouteNames';
import SideMenu from './SideMenu';

const getDrawerNavigation = ({navigation}) => {
  return <SideMenu navigation={navigation} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType={'slide'}
      drawerContent={navigation => getDrawerNavigation(navigation)}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
