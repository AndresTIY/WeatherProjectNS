import React from 'react';
import {View, Text, Image} from 'react-native';
import convertTimestamp from '../config/convertTimestamp';
import images from '../config/images';
import styles from '../styles';

const CurrentView = props => {
  const {currentWeather} = props;
  const {main, dt: timestamp, weather} = currentWeather;
  const [{main: current, icon}] = weather;
  const {temp_min, temp_max} = main;
  // const roundIt = {min: Math.round(temp_min), max: Math.round(temp_max)};
  // const {max, min} = roundIt;

  const {day, month} = convertTimestamp(timestamp);
  const degreeSymbol = String.fromCharCode(176);

  // main: { temp: 73.83, pressure: 1017, humidity: 83, temp_min: 71.01, temp_max: 77 }
  console.log('props?', currentWeather);
  console.log('images', images, icon, images[icon]);
  return (
    <View style={styles.currentWeatherContainer}>
      <View style={styles.currentWeatherLeftContainer}>
        <Text style={styles.currentWeatherTextSm}>
          Today, {month} {day}
        </Text>
        <Text
          style={[
            styles.currentWeatherTextLrg,
            styles.currentWeatherTextPaddingSm,
          ]}>
          {temp_max}
          {degreeSymbol}
        </Text>
        <Text
          style={[
            styles.currentWeatherTextMed,
            styles.currentWeatherTextPaddingMed,
          ]}>
          {temp_min}
          {degreeSymbol}
        </Text>
      </View>
      <View style={styles.currentWeatherRightContainer}>
        <Image source={images[icon]} />
      </View>
    </View>
  );
};

export default CurrentView;
