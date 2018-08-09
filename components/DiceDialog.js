import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Dialog from "react-native-dialog";

export default class DiceDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinCount: 0,
      d6Count: 0,
      coinResults: [],
      d6Results: [],
      selectDiceMode: true
    }
    this.rollDice = this.rollDice.bind(this);
  }

  render() {
    return (
      <View>
        <Dialog.Container visible={this.props.dialogVisible}>
          {this.renderDialogContents()}
          <Dialog.Button key='5' label="Close" onPress={this.props.toggle} />
        </Dialog.Container>
      </View>
    );
  }

  renderDialogContents() {
    if (this.state.selectDiceMode) {
      return ( [
        <Dialog.Title key='1'>Select Dice to Roll</Dialog.Title>,
        <View key='2' style={styles.dieContainer}>
          <Text style={styles.dieTitle}>Coin</Text>
          <TextInput style={styles.dieInput}
            clearTextOnFocus={true}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({coinCount: text})}
            value={this.state.coinCount + ''}
            maxLength={1}
          />
        </View>,
        <View key='3' style={styles.dieContainer}>
          <Text style={styles.dieTitle}>D6</Text>
          <TextInput style={styles.dieInput}
            clearTextOnFocus={true}
            value={''}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({d6Count: text})}
            value={this.state.d6Count + ''}
            maxLength={1}
          />
        </View>,
        <Dialog.Button key='4' label="Roll" onPress={this.rollDice} />
      ]);
    } else {
      var coinElements = this.state.coinResults.map((result, i) => <Text key={'i'+i}> {'Coin ' + (i+1) + ': ' + result} </Text>);
      var d6Elements = this.state.d6Results.map((result, i) => <Text key={'i'+i}> {'Die ' + (i+1) + ': ' + result} </Text>);
      return ( [
        <Dialog.Title key='1'>Results</Dialog.Title>,
        <View key='2' style={styles.resultsContainer}>
          <View style={styles.resultsList}>
            {coinElements.length > 0 ? <Text style={styles.dieTitle}>Coin</Text> : null}
            { coinElements }
          </View>
          <View style={styles.resultsList}>
            {d6Elements.length > 0 ? <Text style={styles.dieTitle}>D6's</Text> : null}
            { d6Elements }
          </View>
        </View>,
        <Dialog.Button key='4' label="Back" onPress={() => this.setState( {selectDiceMode: true })} />
      ]);
    }
  }

  rollDice() {
    var coinResults = [];
    var d6Results = [];
    for (var i = 0; i < this.state.coinCount; i++) {
      if (Math.floor(Math.random() * 2) == 1)
        coinResults.push('heads');
      else
        coinResults.push('tails');
    }
    for (var i = 0; i < this.state.d6Count; i++) {
      var result = Math.floor(Math.random() * 6);
      d6Results.push((result+1) + '');
    }
    this.setState({selectDiceMode: false, coinResults: coinResults, d6Results: d6Results});
  }
}

const styles = StyleSheet.create({
  dieContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5
  },
  dieTitle: {
    fontSize: 24
  },
  dieInput: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    fontSize: 24,
    textAlign: 'center'
  },
  resultsList: {
    flexDirection: 'column'
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
