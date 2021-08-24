import React from 'react';
import {SafeAreaView, Image, Text, View, Alert, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import {
  CONTACTS_LIST,
  CREATE_CONTACT,
  HOME_NAVIGATOR,
  LOGIN,
  SETTINGS,
} from '../../constants/RouteNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';
import Icon from '../../components/common/icon/index';
import MaterialIcons from '../../components/common/icon/index';
import colors from '../../assets/themes/colors';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="ant" name="contacts" size={20} />,
      name: 'Contacts',
      onPress: () => {
        navigation.navigate(CONTACTS_LIST);
      },
    },
    {
      icon: <Icon type="ionicon" name="create-outline" size={20} />,
      name: 'Create Contact',
      onPress: () => {
        navigation.navigate(CREATE_CONTACT);
      },
    },
    {
      icon: <Icon type="ionicon" name="settings-outline" size={20} />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <MaterialIcons type="material" name="logout" size={20} />,
      name: 'Logout',
      onPress: () => handleLogout(),
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        <View>
          <View
            style={{
              height: 0.4,
              backgroundColor: colors.grey,
            }}
          />
          {menuItems.map(({icon, name, onPress}) => {
            return (
              <TouchableOpacity onPress={onPress} key={name}>
                <View style={styles.item}>
                  {icon}
                  <Text style={styles.itemText}>{name}</Text>
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: colors.grey,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideMenu;
