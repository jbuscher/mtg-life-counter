import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Dialog from "react-native-dialog";

export default class LifeEntryDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lifeVal: '20'};
    this.setLife = this.setLife.bind(this);
  }

  render() {
    return (
      <View>
        <Dialog.Container visible={this.props.dialogVisible}>
          <Dialog.Title>Enter Life Total</Dialog.Title>
          <TextInput
            style={styles.lifeInput}
            onChangeText={(text) => this.setState({lifeVal: text})}
            value={this.state.lifeVal}
            keyboardType='numeric'
            maxLength={4}
          />
          <Dialog.Button label="OK" onPress={this.setLife} />
          <Dialog.Button label="Cancel" onPress={this.props.toggle} />
        </Dialog.Container>
      </View>
    );
  }

  setLife() {
    this.props.toggle();
    parsedLife = parseInt(this.state.lifeVal);
    if (!isNaN(parsedLife))
      this.props.setLife(parsedLife, this.props.playerId);
  }
}

const styles = StyleSheet.create({
  lifeInput: {
    height: 40,
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
  }
});
