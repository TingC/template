import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';
import DemoScreen from './screens/DemoScreen/DemoScreen';

export type RootStackParamList = {
  DemoScreen: undefined;
  RegisterScreen: undefined;
  ProfileScreen: { id: number; firstName: string; lastName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      {/* <AntThemeProvider theme={antTheme}> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DemoScreen">
          <Stack.Screen
            name="DemoScreen"
            component={DemoScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* </AntThemeProvider> */}
    </Provider>
  );
};

export default App;
