import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class GreenButton extends React.Component {


  render() {
    return (
      <TouchableOpacity onPress={() => console.log('Worst Green Button Pressed')}>
        <View style={styles.button}>
          <Text style={styles.label}>Green Button</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#25b334',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginVertical: 5,
    paddingHorizontal: 20,
  },

  label: {
    color: '#ffffff',
    fontSize: 28,
    textAlign: 'center',
  },
});
