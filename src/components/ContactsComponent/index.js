import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../assets/themes/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Icon from '../common/icon';
import Message from '../common/Message';
import styles from './styles';
import Container from '../common/Container';
import {color} from 'react-native-reanimated';

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
                flexDirection: 'row',
                width: 45,
                justifyContent: 'center',
                height: 45,
                alignItems: 'center',
                backgroundColor: colors.grey,
                borderRadius: 45,
              }}>
              {first_name ? (
                <Text
                  style={[
                    styles.name,
                    {color: colors.white, fontWeight: 'bold'},
                  ]}>
                  {first_name[0]}
                </Text>
              ) : null}

              {last_name ? (
                <Text
                  style={[
                    styles.name,
                    {color: colors.white, fontWeight: 'bold'},
                  ]}>
                  {last_name[0]}
                </Text>
              ) : null}
            </View>
          )}

          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name} </Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>+91 {phone_number}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={16} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
      }}>
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
        <Container
          style={{
            padding: 0,
            paddingVertical: 10,
          }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 0.4,
                  backgroundColor: colors.grey,
                  marginLeft: 20,
                  marginRight: 20,
                }}></View>
            )}
            ListEmptyComponent={listEmptyComponent}
            ListFooterComponent={<View style={{height: 50}}></View>}
          />
        </Container>
      )}
    </View>
  );
};

export default ContactsComponent;
