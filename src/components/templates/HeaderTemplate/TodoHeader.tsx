import { Label } from 'components/atoms';
import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './TodoHeader.style';
const TodoHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/Icons/ThunkableBeaver.png')}
        />
        <Label style={styles.label}>MY PROJECTS</Label>
      </View>
    </View>
  );
};

export default TodoHeader;
