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
  },
  listItemContainer: {
    flexDirection: 'row',
    flex: 0.25,
    paddingLeft: 20,
    paddingRight: 30,
    backgroundColor: colors.offWhite,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  listItemImage: {
    height: 50,
    width: 50,
  },
  listItemLeftContainer: {
    flexDirection: 'row',
  },
  listItemInfoContainer: {
    justifyContent: 'space-around',
  },
  listItemInfoLeftContainer: {
    justifyContent: 'space-around',
    paddingLeft: 10,
  },
  listItemTextLrg: {
    fontFamily: 'Arial',
    fontSize: 16,
  },
  listItemTextMed: {
    fontFamily: 'Arial',
    fontSize: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  headerIcon: {
    fontSize: 24,
  },
  currentDetailContainer: {
    flexDirection: 'row',
    marginTop: 25,
    height: 400,
  },
  currentDetailLeftContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  currentDetailRightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentDetailWeatherTextSm: {
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  currentDetailWeatherTextMed: {
    fontSize: 30,
    fontFamily: 'Arial',
  },
  currentDetailWeatherTextLrg: {
    fontSize: 60,
    fontFamily: 'Arial',
  },
  currentDetailImage: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
});

export default styles;
