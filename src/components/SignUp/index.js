import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/RouteNames';
import colors from '../../assets/themes/colors';
import Message from '../../components/common/Message';

const Register = ({onSubmit, loading, error, onChange, form, errors}) => {
  const [isSecureEntry, setSecureEntry] = useState(false);
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form} />
        {error?.error && (
          <Message danger message={error?.error} retry retryFn={() => {}} />
        )}
        <Input
          label="Username"
          placeholder="Enter username"
          placeholderTextColor={colors.grey}
          iconPosition="left"
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
          error={errors.userName}
        />
        <Input
          label="First name"
          placeholderTextColor={colors.grey}
          placeholder="Enter first name"
          iconPosition="left"
          onChangeText={value => {
            onChange({name: 'firstName', value});
          }}
          error={errors.firstName}
        />
        <Input
          label="Last name"
          placeholder="Enter last name"
          placeholderTextColor={colors.grey}
          iconPosition="left"
          onChangeText={value => {
            onChange({name: 'lastName', value});
          }}
          error={errors.lastName}
        />
        <Input
          label="Email"
          placeholder="Enter email"
          placeholderTextColor={colors.grey}
          iconPosition="left"
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
          error={errors.email}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          placeholderTextColor={colors.grey}
          secureTextEntry={isSecureEntry}
          icon={
            <TouchableOpacity onPress={() => setSecureEntry(prev => !prev)}>
              <Text>{isSecureEntry ? 'show' : 'hide'}</Text>
            </TouchableOpacity>
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          error={errors.password}
        />
        {console.log('error :>> ', error)}
        <CustomButton
          loading={loading}
          onPress={onSubmit}
          primary
          disabled={loading}
          title="Submit"
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Register;
