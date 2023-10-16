import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { Button } from 'react-native-paper';
import { RootScreenEnum } from '../constants/screen';
import { NavigationProp } from '@react-navigation/native';
import Header from '../components/header';

export type RootParamList = {
  SplashScreen?: {};
  [RootScreenEnum.PRODUCT_LIST_SCREEN]?: {};
}

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

export default function ProductListScreen({navigation}: Props) {
  return (
    <View>
      <Header goBack={navigation.goBack}/>
      <Text>Products Lists</Text>
    </View>
  );
}
