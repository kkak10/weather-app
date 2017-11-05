import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import styles from './styles';
import Weather from './components/Weather';
import Loading from './components/Loading';
import { getPosition } from './utils';
import { getWeather } from './api';

class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  }

  componentDidMount() {
    getPosition()
      .then(position => getWeather(position.coords.latitude, position.coords.longitude))
      .then(data => 
        this.setState({
          isLoaded: true,
          temperature: data.main.temp,
          name: data.weather[0].main,
        })
      )
      .catch(error => this.setState({error}));
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
        { 
          isLoaded 
          ? <Weather weatherName={name} 
                     temp={Math.ceil(temperature - 273.15)} />
          : <Loading error={error} />
        }
      </View>
    );
  }
}

export default App;