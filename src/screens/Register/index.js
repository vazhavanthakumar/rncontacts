import React, {useState, useContext} from 'react';
import RegisterComponent from '../../components/SignUp';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import validator from 'validator';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/RouteNames';
import {useFocusEffect} from '@react-navigation/native';

const SignUp = () => {
  const {navigate} = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  console.log('data :>> ', data, error);

  React.useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      if (data || error) {
        clearAuthState()(authDispatch);
      }
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password' && value.length < 6) {
        setErrors(prev => {
          return {...prev, [name]: 'This field requires min 6 characters'};
        });
      } else if (name === 'email' && !validator.isEmail(value)) {
        setErrors(prev => {
          return {...prev, [name]: 'Email is not valid'};
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a firstname'};
      });
    }

    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a lastname'};
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default SignUp;
