import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/icon';
import ContactDetailComponent from '../../components/ContactDetailComponent';

const ContactsDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {setOptions} = useNavigation([]);

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
              }}>
              <TouchableOpacity>
                <Icon
                  size={24}
                  // color={colors.grey}
                  name={item.isFavourite ? 'star' : 'star-border'}
                  type="material"
                />
              </TouchableOpacity>

              <TouchableOpacity style={{paddingLeft: 10}}>
                <Icon
                  size={24}
                  // color={colors.grey}
                  name="delete"
                  type="material"
                />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item]);

  return <ContactDetailComponent contact={item} />;
};

export default ContactsDetails;
