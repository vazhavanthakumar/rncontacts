import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import ContactDetailComponent from '../../components/ContactDetailComponent';

const ContactsDetails = () => {
  const {params: {item = {}} = {}} = useRoute();

  return <ContactDetailComponent contact={item} />;
};

export default ContactsDetails;
