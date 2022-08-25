import React, { ReactNode } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { styles } from './Label.style';
interface LabelProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Label: React.FC<LabelProps> = props => {
  return (
    <Text style={props.style ? props.style : styles.label}>
      {props.children}
    </Text>
  );
};
