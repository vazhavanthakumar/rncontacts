import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/RouteNames';
import colors from '../../assets/themes/colors';

const Register = ({onSubmit, onChange, form, errors}) => {
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
          secureTextEntry={true}
          icon={<Text>Show</Text>}
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          error={errors.password}
        />

        <CustomButton onPress={onSubmit} primary title="Submit" />

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