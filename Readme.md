## Practice App - Weather Service

Create, from scratch, a React Native app that calls the Open Weather API and displays the results

### Requirements

- Do not use third party libraries
- Be sure the app looks appropriate on different devices
- Read the OpenWeather API documentation
- Use your current city (Dallas, TX)

### Challenges

- Since third party libraries aren't allowed, such as Redux, local state should manage data
- 5 day forecast API also shows the 3 hour forecast. The 16 day forecast API handles the necessary forecast information without the 3 hour data. Unfortunately, the 16 day forecast API is a paid service.
- Could solve the 5 day forecast challenge by checking to see if the index is divisible by 8. It could look like:

```js
const items = ['8a', '11a','2p', '5p', '8pm', '11pm', '2a', '5a', '8a', '11a', ...]
let forecast = []
items.filter((item, i) => {
    i % 8 === 0 && forecast.push(item)
})
// => forecast === ['8a', '8a']

```
