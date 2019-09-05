import React, {PureComponent, Fragment} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import CurrentView from './CurrentView';
import ListItem from './ListItem';

import {currentWeatherAPI, fiveDayForecastAPI} from '../api/api';
import styles from '../styles';

class Main extends PureComponent {
  state = {
    isLoaded: false,
    currentWeather: undefined,
    forecast: [],
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

  _renderItem = ({item}) => <ListItem data={item} />;

  render() {
    const {
      isLoaded,
      currentWeather,
      forecast,
      showCurrent,
      showDetailed,
    } = this.state;
    console.log('forecast', forecast);
    return (
      <View style={styles.f1}>
        {!isLoaded ? (
          <View style={styles.centeredContainer}>
            <ActivityIndicator size="large" color="#1EA9F6" />
          </View>
        ) : (
          <Fragment>
            <CurrentView currentWeather={currentWeather} />
            <FlatList
              data={forecast}
              extraData={this.state}
              renderItem={this._renderItem}
            />
          </Fragment>
        )}
      </View>
    );
  }
}

export default Main;
