import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    position: 'relative',
  },
  spinner: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});

export default globalStyles;