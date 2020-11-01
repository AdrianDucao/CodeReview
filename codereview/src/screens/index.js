import React from 'react';
import Screen from './Screens';

export const Dashboard = ({navigation}) => <Screen navigation={navigation} name="Dashboard"/>
export const Profile = ({navigation}) => <Screen navigation={navigation} name="Profile"/>
export const Jobs = ({navigation}) => <Screen navigation={navigation} name="Jobs"/>
export const Request = ({navigation}) => <Screen navigation={navigation} name="Request"/>
export const Signout = ({navigation}) => <Screen navigation={navigation} name="Sign out"/>