import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootViewProps} from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerRootView';
import {RootScreenEnum} from './constants/screen';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';

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
  {
    name: RootScreenEnum.PRODUCT_SCREEN,
    component: ProductScreen,
  },
];

const linking = {
  prefixes: ['frotnend://'],
};

function AppRouter(): JSX.Element {
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

export default AppRouter;
