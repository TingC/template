import { StyleSheet } from 'react-native';
import appTheme from 'styles/appTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 71,
    backgroundColor: appTheme.app_background,
  },
  floatingIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: appTheme.button_floating_color,
    position: 'absolute',
    bottom: 10,
    right: 10,
    shadowColor: appTheme.button_floating_color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  floatingActiveIcon: {
    backgroundColor: appTheme.button_floating_hover_color,
  },

  deleteIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightGray',
    borderBottomWidth: 0.5,
    borderTopColor: 'lightGray',
    borderTopWidth: 0.5,
    height: 86,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  iconWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    paddingTop: 8,
  },

  title: {
    fontSize: 20,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
  logo: {
    width: 32,
    height: 32,
  },
  inputStyle: {
    width: 200,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#40A9FF',
    marginLeft: 8,
    textAlignVertical: 'center',
  },
  dateAndNameStyle: {
    width: 200,
    flexDirection: 'column',
    marginLeft: 10,
  },
  inputItemStyle: {
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    fontFamily: 'SourceSansPro-Light',
    height: 100,
  },

  labelNameStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    fontFamily: 'SourceSansPro-Light',
  },
  labelDateStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: appTheme.black_50,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  modal: {
    justifyContent: 'center',
    marginHorizontal: 8,
  },
});
