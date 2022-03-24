import React, { Component } from 'react';
import { NavigationContainer} from '@react-navigation/native'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Transaccion from '../screens/Transaccion';

const Tab=createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name='Historial de viajes' component={Transaccion}></Tab.Screen>
              <Tab.Screen name='Viaje' component={Search}></Tab.Screen>
          </Tab.Navigator>
      </NavigationContainer>
    )
  }
}