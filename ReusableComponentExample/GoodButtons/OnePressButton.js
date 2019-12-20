import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class OnePressButton extends React.Component {
  PropTypes = {
    onPress: PropTypes.func.isRequired,
  }

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
    this.props.onPress();
    this.setState({
      disabled: true,
    });
  }

  render() {
    const onePressStyle = {
      backgroundColor: this.state.disabled ? '#222222' : '#a80d18',
      width: 100,
      height: 40,
    };

    return <Button style={onePressStyle}
                   disabled={this.state.disabled}
                   onPress={this._onPress}
                   title={'Once'}/>;
  }
}
