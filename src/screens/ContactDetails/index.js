import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/icon';
import ContactDetailComponent from '../../components/ContactDetailComponent';
import {CONTACTS_LIST} from '../../constants/RouteNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {GlobalContext} from '../../context/Provider';
import {navigate} from '../../navigations/SideMenu/RootNavigator';

const ContactsDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {setOptions} = useNavigation([]);
  const {
    contactsDispatch,
    contactsState: {
      deleteContacts: {loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingEnd: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Icon
                  size={24}
                  // color={colors.grey}
                  name={item.isFavourite ? 'star' : 'star-border'}
                  type="material"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => {
                  Alert.alert(
                    'Delete Contact!',
                    `Are you sure you want to remove ${
                      item.first_name + ' ' + item.last_name
                    } ?`,
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'Ok',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACTS_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <Icon
                    size={24}
                    // color={colors.grey}
                    name="delete"
                    type="material"
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

  return <ContactDetailComponent contact={item} />;
};

export default ContactsDetails;
