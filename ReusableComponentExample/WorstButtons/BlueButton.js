import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class BlueButton extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={() => console.log('Worst Blue Button Pressed')}>
        <View style={styles.button}>
          <Text style={styles.label}>Blue Button</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4287f5',
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
