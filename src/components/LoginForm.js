import React, {useState} from 'react';
import {Button, Card, CardSection, Input} from './common';

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({email: '', password: ''});
  return (
    <Card>
      <CardSection>
        <Input
          value={inputFields.email}
          onChangeText={email => setInputFields({email})}
          placeholder="Email"
          label="Email"
        />
      </CardSection>
      <CardSection>
        <Input
          value={inputFields.password}
          secureTextEntry={true}
          placeholder="Password"
          label="Password"
        />
      </CardSection>

      <CardSection>
        <Button>Log in</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;
