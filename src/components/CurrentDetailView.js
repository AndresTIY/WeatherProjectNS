import React from 'react';
import {View, Text, Image} from 'react-native';
import {convertTimestamp, images, convertDegree} from '../utils';
import styles from '../styles';
import {Header} from '.';

const CurrentDetailView = props => {
  const {handleCurrentPress, currentWeather, isToday} = props;
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

  const {day, month, dayOfWeek} = convertTimestamp(timestamp);
  const degreeSymbol = String.fromCharCode(176);
  const direction = convertDegree(deg);

  return (
    <View style={styles.mainContainer}>
      <Header onPress={handleCurrentPress} />

      <View style={styles.currentDetailContainer}>
        <View style={styles.currentDetailLeftContainer}>
          <View>
            <Text style={styles.currentDetailWeatherTextSm}>
              {isToday ? 'Today' : dayOfWeek}
            </Text>
            <Text style={styles.currentDetailWeatherTextSm}>
              {month},{day}
            </Text>
          </View>

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

          <View>
            <Text style={styles.currentDetailWeatherTextSm}>
              Humidity: {humidity}
            </Text>
            <Text style={styles.currentDetailWeatherTextSm}>
              Pressure: {pressure}
            </Text>
            <Text style={styles.currentDetailWeatherTextSm}>
              Wind: {speed} km/hr {direction}
            </Text>
          </View>
        </View>
        <View style={styles.currentDetailRightContainer}>
          <Image style={styles.currentWeatherImage} source={images[icon]} />
          <Text style={styles.currentDetailWeatherTextSm}>{current}</Text>
        </View>
      </View>
    </View>
  );
};

export default CurrentDetailView;
