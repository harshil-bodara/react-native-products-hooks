import * as React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {RootScreenEnum} from '../../constants/screen';

const Product = ({product, navigation}: any) => (
  <Card
    onPress={() =>
      navigation.navigate(RootScreenEnum.PRODUCT_SCREEN, {id: product?.id})
    }>
    <Card.Cover source={{uri: product?.image}} />
    <Card.Content>
      <Text variant="titleLarge">{product?.title}</Text>
      <Text variant="bodyMedium">{product?.description}</Text>
    </Card.Content>
  </Card>
);

export default Product;