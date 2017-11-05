import { AppRegistry } from 'react-native';
import App from './App';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();
console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent('WeatherApp', () => App);
