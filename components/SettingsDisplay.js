import React from 'react';
import { StyleSheet,  View, Text, TouchableOpacity } from 'react-native';
import SettingsList from 'react-native-settings-list';
import { Icon } from 'react-native-elements'

export default class SettingsDisplay extends React.Component {
  render() {
    return (
      <View>
        <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc', flexDirection:'row'}}>
          <TouchableOpacity style={{alignSelf:'center',marginTop:30,marginBottom:10, marginLeft:10}}
            onPress={this.props.toggle}>
           <Icon name='chevron-left' size={30} color='grey'/>
          </TouchableOpacity>
          <Text style={{alignSelf:'center',marginTop:30,marginBottom:10, marginLeft:'auto', marginRight:'auto', fontWeight:'bold',fontSize:16}}>Settings</Text>
        </View>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            title='Dark Theme'
            hasSwitch={true}
            hasNavArrow={false}
            switchState={this.props.darkThemeEnabled}
            switchOnValueChange={this.props.toggleTheme}
          />
        </SettingsList>
      </View>
    );
  }
}