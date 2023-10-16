import * as React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { ViewProps } from 'react-native';

interface Props extends ViewProps {
    goBack: any;
    title: string;
  }

const Header = ({goBack, title}: Props) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      <Text onPress={goBack}>Back</Text>
    </Appbar.Header>
  );
};

export default Header;