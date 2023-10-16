import React from 'react';
import {View, ViewProps} from 'react-native';
import {RootScreenEnum} from '../constants/screen';
import {NavigationProp} from '@react-navigation/native';
import Header from '../components/header';
import Product from '../components/product';
import {ScrollView} from 'react-native-gesture-handler';
import useProduct from '../hooks/useProduct';
import Loader from '../components/loader';

export type RootParamList = {
  SplashScreen?: {};
  [RootScreenEnum.PRODUCT_LIST_SCREEN]?: {};
};

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

export default function ProductListScreen({navigation}: Props) {
  const {products, loading} = useProduct();

  return (
    <View>
      <Header goBack={navigation.goBack} title='Products'/>
      {loading && <Loader />}
      <ScrollView>
        {products?.map((product, index) => {
          return <Product product={product} key={index} navigation={navigation}/>;
        })}
      </ScrollView>
    </View>
  );
}
