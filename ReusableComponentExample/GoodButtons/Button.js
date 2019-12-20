import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class Button extends React.Component {
  PropTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.boolean,
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}
                        disabled={this.props.disabled}>
        <View style={[styles.button, this.props.style]}>
          <Text style={styles.label}>{this.props.title}</Text>
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
  },

  label: {
    color: '#ffffff',
    fontSize: 28,
    textAlign: 'center',
  },
});
