import React from 'react';
import {SafeAreaView, Image, Text, View, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import {LOGIN, SETTINGS} from '../../constants/RouteNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';
import Icon from '../../components/common/icon/index';
import MaterialIcons from '../../components/common/icon/index';

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
      icon: <Icon type="ionicon" name="settings-outline" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <MaterialIcons type="material" name="logout" />,
      name: 'Logout',
      onPress: () => handleLogout(),
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        <View style={{marginHorizontal: 70}}>
          {menuItems.map(({icon, name, onPress}) => {
            return (
              <TouchableOpacity
                onPress={onPress}
                key={name}
                style={styles.item}>
                {icon}
                <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
