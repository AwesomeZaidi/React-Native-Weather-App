import React from 'react'; // This imports React from the 'react' package
import { WEATHER_API_KEY } from 'react-native-dotenv'
console.log('WEATHER_API_KEY:', WEATHER_API_KEY) // "anything"
// This imports two native Components: `Text`, and `View` from the 'react-native' package.
// `StyleSheet` is a helper Object for creating styles sheets in React Native. 
import { StyleSheet, Text, View } from 'react-native'; 
import DisplayWeather from './Components/DisplayWeather'
// The next block of code is the definition of a component. This component is named App, and it extends `React.Component`.
// Components that extend `React.Component` must implement a render function. The `render()` method must return JSX.
export default class App extends React.Component {

  constructor(props) {
    super(props)
  
    // These will hold the user's location and the weather data when it is loaded
    this.state = {
      location: null,
      weather: null
    };
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      // Now we're setting the state instead of just logging to console
      // You'll always set state by calling `this.setState()`.
      this.setState({ location })
      this.loadWeather()
      console.log(location)
    }, (err) => {
      console.log(err.message)
    });
  };

  loadWeather() {
    const apikey = WEATHER_API_KEY
    const { latitude, longitude } = this.state.location.coords
    const units = 'Imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`
    // `fetch()` is used to load data
    fetch(url)
    // After a connection is made the data is streamed as JSON
    .then(res => res.json())
    // When that resolves we use `this.setState()` to assign the weather data to state which will also re-render the component.
    .then(json => this.setState({ weather: json }))
    .catch(err => console.log(err.message))
  }

  render() {
    // JSX is an extension of the JavaScript language. It allows you to write code that looks like HTML/XML within your JavaScript.
    return (
      // This is a View component with a child Text component. These are displayed on the screen in the default app. Remember these were imported above.
      <View style={styles.container}>
        <DisplayWeather data={this.state.weather}/>
      </View>
    );
  }
}

// This defines an object that will be used to style the components here in the app component.
const styles = StyleSheet.create({
  // These properties of `container` are standard CSS properties, and the values are the same values you would have used in CSS.
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
