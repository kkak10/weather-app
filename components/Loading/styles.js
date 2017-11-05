import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },

  loadingText: {
    fontSize: 38,
    marginBottom: 24,
  },

  errorText: {
    color: '#ff0000',
    backgroundColor: 'transparent',
    marginBottom: 40,
  },
})