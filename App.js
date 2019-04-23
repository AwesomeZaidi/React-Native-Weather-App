import React from 'react'; // This imports React from the 'react' package
// This imports two native Components: `Text`, and `View` from the 'react-native' package.
// `StyleSheet` is a helper Object for creating styles sheets in React Native. 
import { StyleSheet, Text, View } from 'react-native'; 
import DisplayWeather from './Components/DisplayWeather'
// The next block of code is the definition of a component. This component is named App, and it extends `React.Component`.
// Components that extend `React.Component` must implement a render function. The `render()` method must return JSX.
export default class App extends React.Component {
  render() {
    // JSX is an extension of the JavaScript language. It allows you to write code that looks like HTML/XML within your JavaScript.
    return (
      // This is a View component with a child Text component. These are displayed on the screen in the default app. Remember these were imported above.
      <View style={styles.container}>
        <DisplayWeather />
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
