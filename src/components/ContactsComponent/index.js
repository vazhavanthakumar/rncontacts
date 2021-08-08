import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        title="My Profile"
        // modalFooter={<></>}
        modalBody={
          <View>
            <Text>hello from modal</Text>
          </View>
        }
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <CustomButton
        title="open modal"
        secondary
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default ContactsComponent;
