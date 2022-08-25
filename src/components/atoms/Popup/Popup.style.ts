import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  popupContent: {
    backgroundColor: '#EEEFF3',
    padding: 22,
    alignItems: 'center',
    marginTop: '50%',
    width: '90%',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
