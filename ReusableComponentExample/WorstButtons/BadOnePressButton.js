import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class BadOnePressButton extends React.Component {

  constructor(props) {
    super();
    this.state = {
      disabled: false,
    };
  }

  _onPress = () => {
    if (this.state.disabled) {
      return;
    }
    console.log('Worst OnePress Button Pressed');
    this.setState({
      disabled: true,
    });
  }

  render() {
    const onePressStyle = {
      backgroundColor: this.state.disabled ? '#222222' : '#a80d18',
    };

    return (
      <TouchableOpacity onPress={this._onPress}
                        disabled={this.state.disabled}>
        <View style={[styles.button, onePressStyle]}>
          <Text style={styles.label}>Once</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
    width: 100,
    height: 40,
  },

  label: {
    color: '#ffffff',
    fontSize: 28,
    textAlign: 'center',
  },
});
