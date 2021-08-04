import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/RouteNames';
import styles from './styles';

const SideMenu = ({navigation}) => {
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Logout',
      onPress: () => {},
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
