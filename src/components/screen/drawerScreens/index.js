import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { constants } from '../../../config';
import Drawer1 from './drawer1';
import Drawer2 from './drawer2';

const { routes } = constants;

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.Drawer1} component={Drawer1} />
      <Drawer.Screen name={routes.Drawer2} component={Drawer2} />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;
