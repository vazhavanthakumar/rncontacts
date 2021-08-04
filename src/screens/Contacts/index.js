import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container';
import Icon from '../../components/common/icon/index';

const Contacts = ({children}) => {
  const {setOptions, toggleDrawer} = useNavigation();

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
    <Container>
      <Text>Hi from contacts</Text>
    </Container>
  );
};

export default Contacts;
