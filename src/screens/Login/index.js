import React, {useState} from 'react';
import {useContext} from 'react';
import LoginComponent from '../../components/Login';
import {GlobalContext} from '../../context/Provider';
import loginUser from '../../context/actions/auth/login';
import {useRoute} from '@react-navigation/native';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const [errors, setErrors] = useState({});
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({
        ...form,
        userName: params.data.username,
      });
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password' && value.length < 6) {
        setErrors(prev => {
          return {...prev, [name]: 'This field requires min 6 characters'};
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
    console.log('form :>> ', form);
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 2 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      loginUser(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
