import React, {PureComponent, Fragment} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {CurrentDetailView, CurrentView, ListItem, DetailView} from '.';
import {currentWeatherAPI, fiveDayForecastAPI} from '../api/api';
import styles from '../styles';

class Main extends PureComponent {
  state = {
    isLoaded: false,
    currentWeather: undefined,
    forecast: [],
    showCurrent: false,
    showDetail: false,
    detailViewItems: [],
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

  handleForecastPress = item => {
    console.log('ITE', item);
    this.setState(prevState => ({
      showDetail: !prevState.showDetail,
      detailViewItems: item ? item : [],
    }));
  };

  handleCurrentPress = () => {
    this.setState(prevState => ({
      showCurrent: !prevState.showCurrent,
    }));
  };

  _renderItem = ({item}) => (
    <ListItem onPress={() => this.handleForecastPress(item)} data={item} />
  );

  render() {
    const {
      isLoaded,
      currentWeather,
      forecast,
      showCurrent,
      showDetail,
      detailViewItems,
    } = this.state;
    console.log('forecast', forecast);
    return (
      <View style={styles.f1}>
        {!isLoaded && (
          <View style={styles.centeredContainer}>
            <ActivityIndicator size="large" color="#1EA9F6" />
          </View>
        )}
        {isLoaded && !showCurrent && !showDetail && (
          <Fragment>
            <CurrentView
              onPressCurrent={this.handleCurrentPress}
              currentWeather={currentWeather}
            />
            <FlatList
              data={forecast}
              extraData={this.state}
              renderItem={this._renderItem}
            />
          </Fragment>
        )}
        {showCurrent && (
          <CurrentDetailView
            handleCurrentPress={this.handleCurrentPress}
            currentWeather={currentWeather}
          />
        )}
        {showDetail && (
          <DetailView
            detailViewItems={detailViewItems}
            handleForecastPress={this.handleForecastPress}
          />
        )}
      </View>
    );
  }
}

export default Main;
