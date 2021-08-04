import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container';

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
            <Text style={{paddingLeft: 10}}>NAV</Text>
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
