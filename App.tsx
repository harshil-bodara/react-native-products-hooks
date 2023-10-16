import React from 'react';
import { StatusBar, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {RootScreenEnum} from './src/constants/screen';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProductListScreen from './src/screens/ProductListScreen';

const Stack = createNativeStackNavigator();

export const FlowScreen = [
  {
    name: RootScreenEnum.HOME_SCREEN,
    component: HomeScreen,
  },
  {
    name: RootScreenEnum.PRODUCT_LIST_SCREEN,
    component: ProductListScreen,
  },
];

const linking = {
  prefixes: ['frotnend://'],
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <NavigationContainer linking={linking}>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar />
          <Stack.Navigator
            initialRouteName={RootScreenEnum.HOME_SCREEN}
            screenOptions={{
              headerShown: false,
            }}>
            {FlowScreen.map(({name, component}, index) => (
              <Stack.Screen name={name} component={component} key={index} />
            ))}
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
  );
}

export default App;
