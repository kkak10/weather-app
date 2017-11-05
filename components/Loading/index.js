import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const LoadingView = ({ error }) => (
  <View style={styles.loading}>
    <Text style={styles.loadingText}>Getting the weather</Text>
    { error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

export default LoadingView;