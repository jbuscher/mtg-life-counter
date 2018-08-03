import React from 'react';
import { StyleSheet, Button, TouchableHighlight, View, Platform, Text } from 'react-native';

export default class ChangeLifeButton extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  render() {
    return (
      <TouchableHighlight 
      underlayColor='rgba(0, 0, 102, .125)'
      onPress={this.handlePress} style={styles.highlight}>
        <Text style={styles.button}>
          {this.props.amount >= 0 ? "+" + this.props.amount : "" + this.props.amount}
        </Text>
      </TouchableHighlight>
    );
  }

  getPlatformColor() {
    return Platform.OS === 'ios' ? '#007AFF' : 'lightgrey';
  }

  handlePress() {
    this.props.onPress(this.props.amount, this.props.playerId);
  }
}

const styles = StyleSheet.create({
  highlight: {
    flex: 1,
    maxHeight: 50,
    width: 55,
    borderRadius:10,
    backgroundColor : "lightgrey",
    marginLeft :30,
    marginRight:30,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems:'center',
  },
  button: {
    textAlign: 'center',
    fontSize: 18
  }
});
