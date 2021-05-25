import React, {useState} from 'react';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';
import {Text} from 'react-native';

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onButtonPress = () => {
    const {email, password} = inputFields;
    setError('');
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        onLoginSuccess();
      })
      .catch(err => {
        console.log(err, 'err 26');
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            onLoginSuccess();
          })
          .catch(err => {
            onLoginFail();
          });
      });
  };

  const handleChange = (value, name) => {
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const onLoginFail = () => {
    console.log('faillllllll');
    setError('Authentication Failed');
    setLoading(false);
  };

  const onLoginSuccess = () => {
    console.log('successsss');
    setInputFields({
      email: '',
      password: '',
    });
    setError('');
    setLoading(false);
  };

  return (
    <Card>
      <CardSection>
        <Input
          placeholder="user@gmail.com"
          value={inputFields.email}
          onChangeText={text => handleChange(text, 'email')}
          label="Email"
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          // secureTextEntry={true}
          placeholder="Password"
          value={inputFields.password}
          onChangeText={text => handleChange(text, 'password')}
          label="Password"
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>{error}</Text>

      <CardSection>
        {loading ? (
          <Spinner size="small" />
        ) : (
          <Button onPress={onButtonPress}>Log in</Button>
        )}
      </CardSection>
    </Card>
  );
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
