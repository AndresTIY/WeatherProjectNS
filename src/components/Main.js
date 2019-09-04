import React, {PureComponent} from 'react';
import {View, ActivityIndicator} from 'react-native';
import CurrentView from './CurrentView';
import {currentWeatherAPI, fiveDayForecastAPI} from '../api/api';
import styles from '../styles';

class Main extends PureComponent {
  state = {
    isLoaded: false,
    currentWeather: undefined,
    forecast: undefined,
    showCurrent: true,
    showDetailed: false,
  };

  componentDidMount() {
    const toFetch = [currentWeatherAPI, fiveDayForecastAPI];
    Promise.all(toFetch.map(item => fetch(item).then(res => res.json()))).then(
      result => {
        this.setState({
          currentWeather: result[0],
          forecast: result[1].list,
          isLoaded: true,
        });
      },
    );
  }

  render() {
    const {
      isLoaded,
      currentWeather,
      forecast,
      showCurrent,
      showDetailed,
    } = this.state;
    return (
      <View style={styles.f1}>
        {!isLoaded ? (
          <View style={styles.centeredContainer}>
            <ActivityIndicator size="large" color="#1EA9F6" />
          </View>
        ) : (
          <CurrentView currentWeather={currentWeather} />
        )}
      </View>
    );
  }
}

export default Main;
