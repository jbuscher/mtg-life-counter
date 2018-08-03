import React from 'react';
import { BackHandler, StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';

import PlayerContainer from './components/PlayerContainer';
import MiddleSection from './components/MiddleSection';

export default class App extends React.Component {
  state = {
    life1: 20,
    life2: 20,
    shouldRenderSettings: false,
    darkThemeEnabled: false
  }

  constructor(props) {
    super(props);
    this.handleLifeChange = this.handleLifeChange.bind(this);
    this.handleLifeEntry = this.handleLifeEntry.bind(this);
    this.resetLife = this.resetLife.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  render() {
    if (this.state.shouldRenderSettings) {
      return (<SettingsDisplay toggle={this.toggleSettings} />);
    }
    return (
      <View style={this.state.darkThemeEnabled ? styles.darkContainer : styles.lightContainer}>
        <PlayerContainer style={styles.rotate} life={this.state.life1} playerId={1} 
          onLifeChange={this.handleLifeChange}
          onLifeEntry={this.handleLifeEntry}
          />
        <MiddleSection handleReset={this.resetLife} handleSettings={this.toggleSettings}/>  
        <PlayerContainer life={this.state.life2} playerId={2}
          onLifeChange={this.handleLifeChange}
          onLifeEntry={this.handleLifeEntry}
        />
      </View>
    );
  }

  handleLifeChange(amount, playerId) {
    if (playerId == 1) {
      this.setState((prevState) => {
        return {life1: prevState.life1 + amount}
      });
    }
    else {
      this.setState((prevState) => {
        return {life2: prevState.life2 + amount}
      });
    }
  }

  handleLifeEntry(newVal, playerId) {
    if (playerId == 1) {
      this.setState((prevState) => {
        return {life1: newVal}
      });
    }
    else {
      this.setState((prevState) => {
        return {life2: newVal}
      });
    }
  }

  resetLife() {
    //TODO read initial lives from config.
    //TODO add prompt to confirm reset
    this.setState(() => {
      return {life1: 20, life2: 20};
    });
  }

  toggleSettings() {
    this.setState((prevState) => {
      return {shouldRenderSettings: !prevState.shouldRenderSettings};
    });
  }

  toggleTheme() {
    this.setState((prevState) => {
      return {darkThemeEnabled: !prevState.darkThemeEnabled};
    });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    if (this.state.shouldRenderSettings)
      this.toggleSettings();
    return true;
  }
}
const containerShared = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}
const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: '#fff',
    ...containerShared
  },
  darkContainer: {
    backgroundColor: '#111',
    ...containerShared
  },
  rotate: {
    transform: [{rotate: '180deg'}], 
  },
});