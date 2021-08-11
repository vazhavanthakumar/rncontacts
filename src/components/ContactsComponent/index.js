import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/themes/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Icon from '../common/icon';
import Message from '../common/Message';
import styles from './styles';

const ContactsComponent = ({modalVisible, setModalVisible, data, loading}) => {
  const listEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts found" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('datat item ', item);
    const {contact_picture, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 45}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
              }}></View>
          )}

          <View style={{flexDirection: 'row'}}>
            <Text> {first_name}</Text>
            <Text> {last_name}</Text>
          </View>

          <Text>{phone_number}</Text>
        </View>
        <Icon name="right" type="ant" />
      </TouchableOpacity>
    );
  };

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

      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {!loading && (
        <View style={{paddingVertical: 20}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={listEmptyComponent}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
