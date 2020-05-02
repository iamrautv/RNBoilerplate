import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../../../../config';
import Screen1 from './screen1';

const Stack = createStackNavigator();

const { routes } = constants;

const Tab1 = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.Tab1Screen1} component={Screen1} />
  </Stack.Navigator>
);

export default Tab1;
