import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/themes/colors';
import Icon from '../common/icon';
import styles from './styles';
import ImageComponent from './ImageComponent';
import CustomButton from '../common/CustomButton';
import navigate from '../../navigations/SideMenu/RootNavigator';
import {CREATE_CONTACT} from '../../constants/RouteNames';

const ContactDetailComponent = ({contact, loading}) => {
  const {contact_picture, first_name, last_name, phone_number} = contact;

  console.log('loading :>> ', loading);
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.wrapper}>
          <ImageComponent src={contact_picture} />
          <View style={styles.content}>
            <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
          </View>
          <View style={styles.hrLine} />

          <View style={styles.topCallOptions}>
            <TouchableOpacity style={styles.topCallOption}>
              <Icon
                type="ionicon"
                name="call"
                color={colors.primary}
                size={27}
              />
              <Text style={styles.middleText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topCallOption}>
              <Icon
                type="materialCommunity"
                name="message-text"
                color={colors.primary}
                size={27}
              />
              <Text style={styles.middleText}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topCallOption}>
              <Icon
                type="materialCommunity"
                name="video"
                color={colors.primary}
                size={27}
              />
              <Text style={styles.middleText}>Video</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.middleCallOptions}>
            <Icon type="ionicon" name="call" color={colors.grey} size={27} />
            <View style={styles.phoneMobile}>
              <Text>{phone_number}</Text>
              <Text>Mobile</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                type="materialCommunity"
                name="video"
                color={colors.primary}
                size={27}
              />
              <Icon
                type="materialCommunity"
                name="message-text"
                color={colors.primary}
                size={27}
                style={{paddingLeft: 15}}
              />
            </View>
          </View>

          <CustomButton
            style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
            primary
            title="Edit Contact"
            onPress={() => {
              // navigate(CREATE_CONTACT, {contact, editing: true});
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactDetailComponent;
