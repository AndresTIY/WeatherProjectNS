import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {CurrentDetailView, CurrentView, ListItem} from '.';
import {currentWeatherAPI, fiveDayForecastAPI} from '../api/api';
import styles from '../styles';

const Main = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(undefined);
  const [forecast, setForecast] = useState([]);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailViewItems, setDetailViewItems] = useState([]);

  useEffect(() => {
    const toFetch = [currentWeatherAPI, fiveDayForecastAPI];
    Promise.all(toFetch.map(item => fetch(item).then(res => res.json()))).then(
      result => {
        const {list} = result[1];
        setCurrentWeather(result[0]);
        setForecast(changeForecastItem(list));
        setisLoaded(true);
      },
    );
  }, []);

  const changeForecastItem = list => {
    let acc = [];
    list.filter((item, i) => {
      i % 8 === 0 && i >= 8 && acc.push(item);
    });
    return acc;
  };

  const handleForecastPress = item => {
    setShowDetail(!showDetail);
    setDetailViewItems(item ? item : []);
  };

  const handleCurrentPress = () => {
    setShowCurrent(!showCurrent);
  };

  const _renderItem = ({item}) => (
    <ListItem onPress={() => handleForecastPress(item)} data={item} />
  );

  const _keyExtractor = item => item.dt.toString();

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
            onPressCurrent={handleCurrentPress}
            currentWeather={currentWeather}
          />
          <FlatList
            data={forecast}
            // extraData={this.state}
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
          />
        </Fragment>
      )}
      {showCurrent && (
        <CurrentDetailView
          handleCurrentPress={handleCurrentPress}
          currentWeather={currentWeather}
          isToday
        />
      )}
      {showDetail && (
        <CurrentDetailView
          currentWeather={detailViewItems}
          handleCurrentPress={handleForecastPress}
          // isTomorrow={}
        />
      )}
    </View>
  );
};

export default Main;
