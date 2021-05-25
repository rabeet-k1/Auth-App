import React from 'react';
import {View} from 'react-native';

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderRadius: 5,
    margin: 5,
    borderWidth: 1,
    // borderRadius: 2,
    borderColor: '#ddd',
    // borderBottomWidth: 0,
    boxShadow: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
  },
};

export {Card};
