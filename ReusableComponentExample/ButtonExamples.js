import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from "./GoodButtons/Button";
import OnePressButton from './GoodButtons/OnePressButton';
import BadButton from './BadButtons/BadButton';
import BlueButton from './WorstButtons/BlueButton';
import GreenButton from './WorstButtons/GreenButton';
import BadOnePressButton from './WorstButtons/BadOnePressButton';


export default class ButtonExamples extends React.Component {

  _renderGoodButtons() {
    return (
      <>
        <Text style={styles.sectionText}>Good Buttons</Text>
        <Button onPress={() => console.log('Default Button Pressed')}
                style={styles.buttonStyle}
                title={'Default Button'}/>
        <Button onPress={() => console.log('Green Button Pressed')}
                style={[styles.buttonStyle, {backgroundColor: '#25b334'}]}
                title={'Green Button'}/>
        <OnePressButton onPress={() => console.log('OnePress Button Pressed')}/>
      </>
    );
  }

  _renderBadButtons() {
    return (
      <>
        <Text style={styles.sectionText}>Bad Button(s)</Text>
        <BadButton type={'blue'}
                   onPress={() => console.log('Bad Blue Button Pressed')}/>
        <BadButton type={'green'}
                   onPress={() => console.log('Bad Green Button Pressed')}/>
        <BadButton type={'onePress'}
                   onPress={() => console.log('Bad OnePress Button Pressed')}/>
      </>
    );
  }

  _renderWorstButtons() {
    return (
      <>
        <Text style={styles.sectionText}>Worst Buttons</Text>
        <BlueButton />
        <GreenButton />
        <BadOnePressButton />
      </>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        {this._renderGoodButtons()}
        {this._renderBadButtons()}
        {this._renderWorstButtons()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00359e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionText: {
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 36,
    textAlign: 'center',
  },

  buttonStyle: {
    marginVertical: 5,
    paddingHorizontal: 20,
  },
});
