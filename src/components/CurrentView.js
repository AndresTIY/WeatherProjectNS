import React from 'react';
import {View} from 'react-native';
// import styles from '../styles';

const CurrentView = props => {
  const {currentWeather} = props;
  const {main, dt: timestamp, weather} = currentWeather;
  const {main: current} = weather;
  const {temp_min, temp_max} = main;

  const convertTimestamp = () => {
    const date = new Date(timestamp * 1000);
    let day = date.getUTCDate();
    const month = date.getUTCMonth();

    switch (day) {
      case day >= 11 && day <= 13:
        day = day + 'th';
        break;
      default:
        switch (day % 10) {
          case 1:
            day = day + 'st';
            break;
          case 2:
            day = day + 'nd';
            break;
          case 3:
            day = day + 'rd';
            break;
          default:
            day = day + 'th';
            break;
        }
    }
    return {month, day};
  };

  convertTimestamp();

  // main: { temp: 73.83, pressure: 1017, humidity: 83, temp_min: 71.01, temp_max: 77 }
  console.log('props?', currentWeather);
  // date, hi, lo, image, clear
  //   TODAY JUNE 19th
  return <View />;
};

export default CurrentView;
