const appID = 'appid=d6c0f3de6a27ad3154235bf91005e061';

const url = 'http://api.openweathermap.org/data/2.5/';

const city = 'q=dallas,us';

const currentWeatherAPI = `${url}weather?${city}&units=imperial&${appID}`;

// const fiveDayForecastAPI = `${url}forecast?${city}&units=imperial${appID}`;
const fiveDayForecastAPI = `${url}forecast?${city}&units=imperial&${appID}`;
// const fiveDayForecastAPI = `${url}forecast?${city}&units=imperial&cnt=5&${appID}`;

export {currentWeatherAPI, fiveDayForecastAPI};

// http://api.openweathermap.org/data/2.5/forecast?q=dallas,us&units=imperial&appid=d6c0f3de6a27ad3154235bf91005e061
