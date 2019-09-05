import React from 'react';
import {View, Text, Image} from 'react-native';
import convertTimestamp from '../config/convertTimestamp';
import convertDegree from '../config/convertDegree';
import images from '../config/images';
import styles from '../styles';
import Header from './Header';

const CurrentDetailView = props => {
  const {handleCurrentPress, currentWeather} = props;
  const {main, dt: timestamp, weather, wind} = currentWeather;
  const {speed, deg} = wind;
  const [{main: current, icon}] = weather;
  const {temp_min, temp_max, humidity, pressure: press} = main;
  const roundIt = {
    min: Math.round(temp_min),
    max: Math.round(temp_max),
    pressure: Math.round(press),
  };
  const {max, min, pressure} = roundIt;

  const {day, month} = convertTimestamp(timestamp);
  const degreeSymbol = String.fromCharCode(176);
  const direction = convertDegree(deg);

  return (
    <View style={styles.f1}>
      <Header onPress={handleCurrentPress} />
      <View style={styles.currentDetailContainer}>
        <View style={styles.currentDetailLeftContainer}>
          <Text style={styles.currentDetailWeatherTextSm}>Today</Text>
          <Text style={styles.currentDetailWeatherTextSm}>
            {month},{day}
          </Text>
          <View style={styles.aCenter}>
            <Text style={styles.currentDetailWeatherTextLrg}>
              {max}
              {degreeSymbol}
            </Text>
            <Text style={styles.currentDetailWeatherTextMed}>
              {min}
              {degreeSymbol}
            </Text>
          </View>
          <Text style={styles.currentDetailWeatherTextSm}>
            Humidity: {humidity}
          </Text>
          <Text style={styles.currentDetailWeatherTextSm}>
            Pressure: {pressure}
          </Text>
          <Text style={styles.currentDetailWeatherTextSm}>
            Wind: {speed} km/hr {direction}
          </Text>
          <Text style={styles.currentDetailWeatherTextSm} />
        </View>
        <View style={styles.currentDetailRightContainer}>
          <Image styles={styles.currentWeatherImage} source={images[icon]} />
        </View>
      </View>
    </View>
  );
};

export default CurrentDetailView;
