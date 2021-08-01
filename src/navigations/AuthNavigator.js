import React from 'react';
import {createStackNavigator, Header} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/RouteNames';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
