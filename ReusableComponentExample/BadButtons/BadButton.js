import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class BadButton extends React.Component {
  PropTypes = {
    onPress: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super();
    this.state = {
      disabled: false,
    };
  }

  _onPress = () => {
    if (this.state.disabled && this.props.type === 'onePress') {
      return;
    }
    this.props.onPress();
    if (this.props.type === 'onePress') {
      this.setState({
        disabled: true,
      });
    }
  }

  _getLabel() {
    switch(this.props.type) {
      case 'blue':
        return 'Blue Button';
      case 'green':
        return 'Green Button';
      case 'onePress':
        return 'Once';
    }
  }

  _getStyle() {
    switch(this.props.type) {
      case 'blue':
        return styles.blueButton;
      case 'green':
        return styles.greenButton;
      case 'onePress':
        return this.state.disabled ? styles.onePressButtonInactive : styles.onePressButtonActive;
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}
                        disabled={this.state.disabled}>
        <View style={this._getStyle()}>
          <Text style={styles.label}>{this._getLabel()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  blueButton: {
    backgroundColor: '#4287f5',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginVertical: 5,
    paddingHorizontal: 20,
  },

  greenButton: {
    backgroundColor: '#25b334',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginVertical: 5,
    paddingHorizontal: 20,
  },

  onePressButtonActive: {
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#a80d18',
    borderColor: '#ffffff',
    width: 100,
    height: 40,
  },

  onePressButtonInactive: {
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#222222',
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
