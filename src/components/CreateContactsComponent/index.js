import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../CreateContactsComponent/styles';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const CreateContactsComponent = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.profileView} />
        <Text style={styles.chooseText}>Choose Image</Text>
        <Input label="First name" placeholder="Enter first name" />
        <Input label="Last name" placeholder="Enter last name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
          iconPosition="left"
          label="Phone number"
          placeholder="Enter phone number"
          style={{paddingLeft: 10}}
        />

        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContactsComponent;
