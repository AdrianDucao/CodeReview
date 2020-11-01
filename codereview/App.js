import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import {Feather} from '@expo/vector-icons';
import SideBar from './src/components/SideBar';
import {
  Dashboard,
  Profile
} from './src/screens';

const DrawerNavigator = createDrawerNavigator({
  Dashboard,
  Profile
},{
  contentComponent: props => <SideBar{...props} />
});

export default createAppContainer(DrawerNavigator);