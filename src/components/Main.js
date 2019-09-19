import React, {PureComponent, Fragment, useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {CurrentDetailView, CurrentView, ListItem} from '.';
import {currentWeatherAPI, fiveDayForecastAPI} from '../api/api';
import styles from '../styles';

const Main = () => {
  const [isLoaded, setisLoaded] = useState(false)
  const [currentWeather, setCurrentWeather] = useState(undefined)
  const [forecast, setForecast] = useState([])
  const [showCurrent, setShowCurrent] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [detailViewItems, setDetailViewItems] = useState([])

// class Main extends PureComponent {
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
        const {list} = result[1];
        this.setState({
          currentWeather: result[0],
          forecast: this.changeForecastItem(list),
          isLoaded: true,
        });
      },
    );
  }

  changeForecastItem = list => {
    let acc = [];
    list.filter((item, i) => {
      i % 8 === 0 && i >= 8 && acc.push(item);
    });
    return acc;
  };

  handleForecastPress = item => {
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

  _keyExtractor = item => item.dt.toString();

  render() {
    const {
      isLoaded,
      currentWeather,
      forecast,
      showCurrent,
      showDetail,
      detailViewItems,
    } = this.state;

    console.log('detail', forecast);

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
              keyExtractor={this._keyExtractor}
            />
          </Fragment>
        )}
        {showCurrent && (
          <CurrentDetailView
            handleCurrentPress={this.handleCurrentPress}
            currentWeather={currentWeather}
            isToday
          />
        )}
        {showDetail && (
          <CurrentDetailView
            currentWeather={detailViewItems}
            handleCurrentPress={this.handleForecastPress}
            // isTomorrow={}
          />
        )}
      </View>
    );
  }
}
}

export default Main;
