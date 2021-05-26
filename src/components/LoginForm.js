import React, {useState} from 'react';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';
import {Text} from 'react-native';

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({
    email: '',
    password: '',
    error: '',
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
      .then(res => console.log(res, "Resss"))
      .catch(() =>
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => setError('Authentication Failed.')),
      );
  };

  const handleChange = (value, name) => {
    setInputFields({
      ...inputFields,
      [name]: value,
    });
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
