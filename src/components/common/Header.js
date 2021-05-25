import React from 'react';
import {View, Text} from 'react-native';
import {HeaderStyle} from './HeaderStyle';

const Header = props => {
  const {textStyle, viewStyle} = HeaderStyle;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

export {Header};
