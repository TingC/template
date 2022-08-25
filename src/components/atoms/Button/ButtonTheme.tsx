import Button from '@ant-design/react-native/lib/button';
import React from 'react';
import { styles } from './ButtonTheme.style';

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Label } from '../Label/Label';

export interface ButtonProps {
  onPress?: () => void;
  text: string;
  icon?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  onPressIn?: () => void;
  onPressOut?: () => void;
  activeStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const ButtonTheme: React.FC<ButtonProps> = props => {
  return (
    <Button
      activeStyle={props.activeStyle}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      style={props.style ? props.style : styles.buttonContainer}>
      {props?.icon ? props.icon : null}
      <Label style={props?.textStyle ? props?.textStyle : null}>
        {props.text}
      </Label>
    </Button>
  );
};
