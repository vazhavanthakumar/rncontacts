import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationRef} from './SideMenu/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
import HomeNavigator from './HomeNavigator';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setisAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setisAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setisAuthenticated(false);
      }
    } catch (error) {
      console.log('error getting use from asyncstorage:>> ', error);
    }
  };

  useEffect(() => {
    console.log('isLoggedIn called:>> ', isLoggedIn);
    getUser();
  }, [isLoggedIn]);

  useEffect(() => {
    if (authLoaded) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    }
  }, [authLoaded]);

  console.log('authLoaded, isAuthenticated :>> ', authLoaded, isAuthenticated);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
