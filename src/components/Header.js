import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from '../styles';

const backIcon = '<';

const Header = props => {
  const {onPress} = props;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.headerIcon}> {backIcon} </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
