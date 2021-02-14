import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default class GoScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text style={styles.text}>Congratulations..!!<br/>
        You debugged it..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginTop: 150,
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
});
