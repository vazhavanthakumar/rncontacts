import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/RouteNames';
import colors from '../../assets/themes/colors';
import Message from '../common/Message';

const Index = ({loading, error, errors, onChange, onSubmit}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form} />
        {console.log(`error123`, error?.error)}
        {console.log(`error123`, error)}
        {error?.error && <Message danger onDismiss message={error?.error} />}

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

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Index;
