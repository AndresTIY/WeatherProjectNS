import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from '../styles';

const Header = props => {
  const {onPress} = props;
  return (
    <View styles={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
