import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const Product = ({ product }: any) => (
  <Card>
    <Card.Cover source={{ uri: product.image }} />
    <Card.Content>
      <Text variant="titleLarge">{product?.title}</Text>
      <Text variant="bodyMedium">{product?.description}</Text>
    </Card.Content>
  </Card>
);

export default Product;