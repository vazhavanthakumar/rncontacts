import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/themes/colors';
import Icon from '../common/icon';
import Message from '../common/Message';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CONTACTS_DETAILS, CREATE_CONTACT} from '../../constants/RouteNames';

const ContactsComponent = ({data, loading, sortBy}) => {
  const {navigate} = useNavigation();
  const listEmptyComponent = () => {
    return (
      <View style={styles.absoluteView}>
        <Message info message="No contacts found" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigate(CONTACTS_DETAILS, {item});
        }}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 45}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View style={styles.contactView}>
              {first_name ? (
                <Text style={[styles.name, {color: colors.white}]}>
                  {first_name[0]}
                </Text>
              ) : null}

              {last_name ? (
                <Text style={[styles.name, {color: colors.white}]}>
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
    <>
      <View
        style={{
          backgroundColor: colors.white,
          flex: 1,
        }}>
        {loading && (
          <View style={styles.absoluteView}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {!data && listEmptyComponent()}
        {!loading && (
          <SafeAreaView>
            <FlatList
              style={{paddingVertical: 10}}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'First name') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }

                      if (sortBy === 'Last name') {
                        if (b.last_name > a.last_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
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
              // ListEmptyComponent={listEmptyComponent} we are using msg inside view check above line
              ListFooterComponent={<View style={{height: 50}}></View>}
            />
          </SafeAreaView>
        )}
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" color={colors.white} size={24} type="entypo" />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
