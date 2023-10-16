import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {RootScreenEnum} from '../constants/screen';
import {NavigationProp} from '@react-navigation/native';

export type RootParamList = {
  SplashScreen?: {};
  [RootScreenEnum.PRODUCT_LIST_SCREEN]?: {};
};

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

export default function HomeScreen({navigation}: Props) {
  return (
    <View style={styles.loginButtonSection}>
      <Button
        onPress={() => navigation.navigate(RootScreenEnum.PRODUCT_LIST_SCREEN)}
        style={styles.loginButton}
        textColor="white">
        Products
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButtonSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#99004d',
  },
});
