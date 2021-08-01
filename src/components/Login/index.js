import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/RouteNames';

const Index = () => {
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

        <View style={styles.form}></View>

        <Input
          label="Username"
          placeholder="Enter username"
          iconPosition="left"
        />

        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry={true}
          icon={<Text>Show</Text>}
          iconPosition="right"
        />

        <CustomButton primary title="Submit" />

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
