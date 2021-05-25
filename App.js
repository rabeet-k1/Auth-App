import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Header} from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';

const App = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      const config = {
        apiKey: 'AIzaSyBSqdJ5W9mkNB0XHnkxluI2VlDJep9RUIU',
        authDomain: 'auth-2943a.firebaseapp.com',
        projectId: 'auth-2943a',
        storageBucket: 'auth-2943a.appspot.com',
        messagingSenderId: '965508971777',
        appId: '1:965508971777:web:b2212828b4c773eae9ef00',
        measurementId: 'G-MEQWF3KCRZ',
      };

      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }, []);

  return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
    </View>
  );
};

export default App;
