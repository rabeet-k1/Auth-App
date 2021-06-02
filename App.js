import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header, Button, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const renderContent = () => {
    switch (isLoggedIn) {
      case true:
        return (
          <View style={{marginLeft: 5, marginRight: 5}}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{marginTop: 15}}>
            <Spinner size="large" />
          </View>
        );
    }
  };

  return (
    <View>
      <Header headerText="Authentication" />
      {renderContent()}
      {/* {isLoggedIn ? (
        <View style={{marginLeft: 5, marginRight: 5}}>
          <Button>Log Out</Button>
        </View>
      ) : (
        <LoginForm />
      )} */}
    </View>
  );
};

export default App;
