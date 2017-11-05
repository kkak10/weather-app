import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 144,
    backgroundColor: 'transparent',
    color: "#FFF"
  },

  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: "#FFF",
    marginTop: 10,
  },

  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 24,
  },

  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: "#FFF",
    marginBottom: 10,
    fontWeight: "300",
  },

  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: "#FFF",
    marginBottom: 24,
  }
});