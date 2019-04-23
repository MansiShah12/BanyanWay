/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation'
import MainStackNavigator  from './source/components/navigation/mainStackRouter'
const AppContainer = createAppContainer(MainStackNavigator);
type Props = {};

export default class App extends Component<Props> {
  render() {
   return  <AppContainer/>
  }
}

