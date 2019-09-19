import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {convertTimestamp, images} from '../utils';
import styles from '../styles';

const ListItem = props => {
  const {data, onPress} = props;
  console.log('d', data);
  const {weather, dt: timestamp, main} = data;
  const [{main: current, icon}] = weather;
  const {dayOfWeek} = convertTimestamp(timestamp);
  const {temp_min, temp_max} = main;
  const roundIt = {min: Math.round(temp_min), max: Math.round(temp_max)};
  const {max, min} = roundIt;
  const degreeSymbol = String.fromCharCode(176);

  return (
    <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>
      <View style={styles.listItemLeftContainer}>
        <Image style={styles.listItemImage} source={images[icon]} />
        <View style={styles.listItemInfoLeftContainer}>
          <Text style={styles.listItemTextLrg}>{dayOfWeek}</Text>
          <Text style={styles.listItemTextMed}>{current}</Text>
        </View>
      </View>

      <View style={styles.listItemInfoContainer}>
        <Text style={styles.listItemTextLrg}>
          {max}
          {degreeSymbol}
        </Text>
        <Text style={styles.listItemTextMed}>
          {min}
          {degreeSymbol}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
