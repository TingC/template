import { ButtonTheme, Label } from 'components/atoms';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './DialogChild.style';
interface DialogChildProps {
  handleOnNo: () => void;
  handleOnYes: () => void;
}

export const DialogChild: React.FC<DialogChildProps> = ({
  handleOnNo,
  handleOnYes,
}) => {
  return (
    <View style={styles.innerContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/Icons/Question.png')}
      />

      <View style={styles.messageViewStyle}>
        <Label style={styles.titleStyle}>
          Are you sure you want to delete this project?
        </Label>
        <Label style={styles.subTitleStyle}>This action can't be undone</Label>
      </View>

      <View style={styles.buttonWrapper}>
        <ButtonTheme
          onPress={handleOnNo}
          text="No"
          style={styles.noButtonStyle}
          textStyle={styles.noButtonTextStyle}
        />
        <ButtonTheme
          onPress={handleOnYes}
          text="Yes"
          style={styles.yesButtonStyle}
          textStyle={styles.yesButtonTextStyle}
        />
      </View>
    </View>
  );
};
