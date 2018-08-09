import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import DiceDialog from './DiceDialog';

export default class MiddleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dialogVisible: false};
    this.toggleDiceDialog = this.toggleDiceDialog.bind(this);
  }

  render() {
    return (
      <View style={styles.middleSection}>
        <View style={styles.middleLine} />
        <TouchableOpacity style={styles.icon}>
          <Icon name='casino' size={44} color='grey' onPress={this.toggleDiceDialog}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={this.props.handleSettings}>
          <Icon name='settings' size={44} color='grey'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={this.props.handleReset}>
          <Icon name='refresh' size={44} color='grey'/>
        </TouchableOpacity>
        <View style={styles.middleLine} />
        <DiceDialog dialogVisible={this.state.dialogVisible} 
                  toggle={this.toggleDiceDialog}
                  /> 
      </View>
    );
  }

  toggleDiceDialog() {
    this.setState((prevState) => {
      return {dialogVisible: !prevState.dialogVisible};
    });
  }
}

const styles = StyleSheet.create({
  middleSection: {
    justifyContent: 'center',
    flexDirection:'row',
    width: '100%',
  },
  middleLine: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexGrow: 2,
    alignSelf: 'center',
    height: 1,
    marginLeft: 4,
    marginRight: 4,
    shadowColor: 'grey',
    shadowOpacity: 50,
    shadowOffset: {x:2, y:2}
  },
  icon: {
    flexGrow: 1,
  }
});