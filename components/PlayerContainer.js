import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import LifeDisplay from './LifeDisplay';
import LifeEntryDialog from './LifeEntryDialog';
import ChangeLifeButton from './ChangeLifeButton';

export default class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dialogVisible: false,
    }
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  render() {
    let bgColor = this.props.darkThemeEnabled ? styles.darkTheme : styles.lightTheme;
    let lifeColor = this.props.darkThemeEnabled ? 'white' : 'black';
    return (
      <View style={[styles.container, bgColor]}>
        <View style={this.props.style}>
          <ChangeLifeButton amount={-1} onPress={this.props.onLifeChange} playerId={this.props.playerId} />
          <ChangeLifeButton amount={-5} onPress={this.props.onLifeChange} playerId={this.props.playerId} />
        </View>
        <LifeDisplay style={this.props.style} life={this.props.life} onLongPress={this.toggleDialog} color={lifeColor}/>
        <View style={this.props.style}>
          <ChangeLifeButton amount={1} onPress={this.props.onLifeChange} playerId={this.props.playerId} />
          <ChangeLifeButton amount={5} onPress={this.props.onLifeChange} playerId={this.props.playerId} />
        </View>
        <LifeEntryDialog dialogVisible={this.state.dialogVisible} 
                          toggle={this.toggleDialog}
                          setLife={this.props.onLifeEntry}
                          playerId={this.props.playerId}
                          color={lifeColor}
                          /> 
      </View>
    );
  }

  toggleDialog() {
    this.setState((prevState) => {
      return {dialogVisible: !prevState.dialogVisible};
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightTheme: {
    backgroundColor: '#fff'
  },
  darkTheme: {
    backgroundColor: '#3B3A32'
  }
});