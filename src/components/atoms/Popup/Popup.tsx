import React from 'react';
import { View, Modal } from 'react-native';

import { styles } from './Popup.style';

interface PopupProps {
  isOpen: boolean;
  hidePopup: () => void;
  handleOnShow: () => void;
  handleOnHide: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = props => (
  <Modal
    style={styles.modal}
    animationType="fade"
    transparent={true}
    visible={props.isOpen}>
    <View style={styles.popupContent}>{props.children}</View>
  </Modal>
);

export default Popup;
