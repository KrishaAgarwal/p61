import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.displayText}>Learn Debugging </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayText: {
    backgroundColor: 'grey',
    color: 'orange',
    textAlign: 'center',
    fontSize: 30,
    padding: 5,
  },
});

export default Header;
