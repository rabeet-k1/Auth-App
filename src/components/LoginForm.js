import React, {useState} from 'react';
import {Button, Card, CardSection, Input} from './common';
import firebase from 'firebase';
import {Text} from 'react-native';

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({
    email: '',
    password: '',
    error: '',
  });

  const onButtonPress = () => {
    const {email, password} = inputFields;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() =>
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => setInputFields({error: 'Authentication Failed.'})),
      );
  };

  return (
    <Card>
      <CardSection>
        <Input
          placeholder="user@gmail.com"
          value={inputFields.email}
          onChangeText={email => setInputFields({email})}
          label="Email"
        />
      </CardSection>
      <CardSection>
        <Input
          value={inputFields.password}
          secureTextEntry
          // secureTextEntry={true}
          placeholder="Password"
          onChangeText={password => setInputFields({password})}
          label="Password"
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>{inputFields.error}</Text>

      <CardSection>
        <Button onPress={onButtonPress}>Log in</Button>
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
