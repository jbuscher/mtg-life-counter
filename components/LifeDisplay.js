import React from 'react';
import { StyleSheet,  View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class LifeDisplay extends React.Component {
  render() {
    return (
      <TouchableHighlight style={[styles.highlight, this.props.style]} 
        underlayColor='rgba(0, 0, 120, .08)'
        onLongPress={this.props.onLongPress}>
        <Text style={[styles.lifeDisplay, {width: digitWidth * this.countDigits(this.props.life)}, {color: this.props.color}]}>
          {this.props.life}
        </Text>
      </TouchableHighlight>
    );
  }

  countDigits(val) {
    var count = 1;
    if (val < 0) {
      count++;
      val = val * -1;
    }
    while(Math.floor(val/10) > 0) {
      count++
      val /= 10;
    }
    return count;
  }
}

const digitWidth = 46;
const styles = StyleSheet.create({
  lifeDisplay: {
    fontSize: 70,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  highlight: {
    borderRadius: 5,
  }
});