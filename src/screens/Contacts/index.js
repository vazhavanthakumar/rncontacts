import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/icon/index';
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Contacts;
