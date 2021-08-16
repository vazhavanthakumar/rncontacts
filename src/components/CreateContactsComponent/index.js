import React from 'react';
import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import styles from '../CreateContactsComponent/styles';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/themes/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactsComponent = ({
  onChangeText,
  form,
  onSubmit,
  setForm,
  loading,
  error,
  errors,
  toggleValueChanged,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.profileView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose Image</Text>
        </TouchableOpacity>
        <Input
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          label="First name"
          placeholder="Enter first name"
          placeholderTextColor={colors.grey}
          error={errors.firstName}
          value={form.firstName || null}
        />
        <Input
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          label="Last name"
          placeholder="Enter last name"
          placeholderTextColor={colors.grey}
          error={errors.lastName}
          value={form.lastName || null}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={code => {
                console.log('code', code);
                const phoneCode = code.callingCode[0];
                const countryCode = code.cca2;
                setForm({...form, phoneCode, countryCode: countryCode});
              }}
            />
          }
          iconPosition="left"
          label="Phone number"
          placeholder="Enter phone number"
          placeholderTextColor={colors.grey}
          style={{paddingLeft: 10}}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          value={form.phoneNumber || null}
          error={errors.phoneNumber}
          keyboardType="number-pad"
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Add Favourites</Text>
          <Switch
            trackColor={{false: colors.grey, true: colors.primary}}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChanged}
            value={form.isFavourite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />
      </Container>

      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

export default CreateContactsComponent;
