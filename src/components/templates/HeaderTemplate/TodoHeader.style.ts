import { StyleSheet } from 'react-native';
import appTheme from 'styles/appTheme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: 124,
    overflow: 'hidden',
    paddingBottom: 5,
    shadowColor: '#979797',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 8,
  },
  container: {
    height: 123,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomColor: '#979797',
    backgroundColor: appTheme.app_background,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
  },

  label: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    fontFamily: 'SourceSansPro-SemiBold',
    letterSpacing: 0.8,
  },
});
