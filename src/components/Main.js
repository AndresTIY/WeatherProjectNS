import React, {PureComponent} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {currentWeatherAPI, fiveDayForecastAPI} from '../api/api';
import styles from '../styles';

class Main extends PureComponent {
  state = {
    isLoaded: false,
    currentWeather: undefined,
    forecast: undefined,
    error: undefined,
  };

  componentDidMount() {
    fetch(currentWeatherAPI)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            currentWeather: result,
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );

    fetch(fiveDayForecastAPI)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            forecast: result.list,
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    console.log('this ', this.state);
    return (
      <View style={styles.f1}>
        <Text>Hi</Text>
      </View>
    );
  }
}

export default Main;
