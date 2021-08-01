import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="left"
        // error={'This field is required'}
      />

      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />

      <CustomButton secondary title="Submit" loading={true} disabled={true} />
      <CustomButton secondary loading title="Click me" />
      <CustomButton primary title="Submit" loading={true} disabled={true} />
      <CustomButton danger title="Submit" />
    </Container>
  );
};

export default Login;
