import {StyleSheet} from 'react-native';

const colors = {
  blue: '#1EA9F6',
  offWhite: '#F7F7F7',
  white: '#F7FEFE',
};

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
  aCenter: {
    alignItems: 'center',
  },
  jContent: {
    justifyContent: 'center',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentWeatherContainer: {
    flex: 0.25,
    flexDirection: 'row',
    backgroundColor: colors.blue,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 60,
    paddingRight: 20,
  },
  currentWeatherLeftContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  currentWeatherRightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentWeatherTextPaddingSm: {
    paddingLeft: 5,
  },
  currentWeatherTextPaddingMed: {
    paddingLeft: 10,
  },
  currentWeatherTextSm: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  currentWeatherTextMed: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Arial',
  },
  currentWeatherTextLrg: {
    color: colors.white,
    fontSize: 60,
    fontFamily: 'Arial',
  },
  currentWeatherImage: {
    height: 120,
    width: 120,
    // resizeMode: 'cover',
  },
});

export default styles;
