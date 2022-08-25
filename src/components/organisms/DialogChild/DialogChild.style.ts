import { StyleSheet } from 'react-native';
import appTheme from 'styles/appTheme';

export const styles = StyleSheet.create({

  innerContainer: {
    backgroundColor: '#EEEFF3',
    flexDirection: 'row',
    height: 192,
    width: '100%',
  },

  buttonWrapper: {
    backgroundColor: '#EEEFF3',
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    paddingTop: 8,
    bottom: 12,
  },

  title: {
    fontSize: 20,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
  logo: {
    width: 22,
    height: 22,
  },
  inputStyle: {
    width: 200,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#40A9FF',
    marginLeft: 8,
    textAlignVertical: 'center',
  },
  messageViewStyle: {
    width: '100%',
    flexDirection: 'column',
    marginLeft: 10,
  },
  titleStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
    fontFamily: 'SourceSansPro-Light',
  },
  subTitleStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: appTheme.black_50,
    fontFamily: 'SourceSansPro-Light',
    marginTop: 10,
  },

  yesButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    height: 32,
    width: 60,
    backgroundColor: '#1890FF',
    color: 'white',
    marginLeft: 16,
    borderRadius: 4,
  },

  noButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 32,
    width: 60,
    backgroundColor: '#C4C4C4',
    color: '#1890FF',
    borderRadius: 4,
    borderColor: appTheme.black_30,
  },

  yesButtonTextStyle: {
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    fontFamily: 'SourceSansPro-Regular',
  },

  noButtonTextStyle: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'SourceSansPro-Regular',
  },
});
