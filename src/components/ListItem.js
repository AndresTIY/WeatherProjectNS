import React from 'react';
import {View, Text, Image} from 'react-native';
import {convertTimestamp, images} from '../config';
import styles from '../styles';

const ListItem = props => {
  const {data} = props;
  const {weather, dt: timestamp, main} = data;
  const [{main: current, icon}] = weather;
  console.log('p', data, icon);
  const {dayOfWeek} = convertTimestamp(timestamp);
  const {temp_min, temp_max} = main;
  const roundIt = {min: Math.round(temp_min), max: Math.round(temp_max)};
  const {max, min} = roundIt;
  const degreeSymbol = String.fromCharCode(176);

  return (
    <View style={styles.listItemContainer}>
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
    </View>
  );
};

export default ListItem;

// Day, Current, Icon, Hi, Low
