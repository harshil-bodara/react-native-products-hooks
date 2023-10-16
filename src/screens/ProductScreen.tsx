import React from 'react';
import {View, ViewProps} from 'react-native';
import {RootScreenEnum} from '../constants/screen';
import {NavigationProp} from '@react-navigation/native';
import Header from '../components/header';
import { Card, Text } from 'react-native-paper';
import useProduct from '../hooks/useProduct';

export type RootParamList = {
  SplashScreen?: {};
  [RootScreenEnum.PRODUCT_LIST_SCREEN]?: {id: string};
};

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
  route:any;
}

export default function ProductListScreen({navigation,route}: Props) {
 const { products } = useProduct();
  const { id } = route.params;

  const product:any = products.find((item:any) => item.id === id);

  return (
    <View>
      <Header goBack={navigation.goBack} title={"Product"} />
      <Text variant='titleLarge'>Title</Text><Text>{product?.title}</Text>
      <Text variant='titleLarge'>Description</Text><Text>{product?.description}</Text>
      <Text variant='titleLarge'>Rate</Text><Text>{product?.rating?.rate} Rate</Text>
      <Text variant='titleLarge'>Category</Text><Text>{product?.category}</Text>
      <Text variant='titleLarge'>Image</Text><Card.Cover source={{uri: product?.image}} />
    </View>
  );
}
