import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import weatherCase from './weatherCase';
import styles from './styles';

class Weather extends Component {
  static propTypes = {
    weatherName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
  };

  render() {
    const { temp, weatherName } = this.props;
    const weather = weatherCase[weatherName] || {};

    return (
      <LinearGradient colors={weather.colors} style={styles.container}>
        <View style={styles.upper}>
          <Icon name={weather.icon} style={styles.icon}></Icon>
          <Text style={styles.temp}>{temp}℃</Text>
        </View>

        <View style={styles.lower}>
          <Text style={styles.title}>{weather.title}</Text>
          <Text style={styles.subtitle}>{weather.subtitle}</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default Weather;