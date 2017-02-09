import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import App from './component/App'

export default class dribbleAppUi1 extends Component {
  renderScene(route, navigator){
    var globalProps = {navigator}
    switch(route.id){
      case 'App': 
        return (
          <App />
        )
    }
  }
  render() {
    return (
      <Navigator 
        initialRoute={{
          id: 'App'
        }}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('dribbleAppUi1', () => dribbleAppUi1);
