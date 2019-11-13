import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Login from './ios/components/Login';
import HomeScreen from './ios/components/HomeScreen';
import EventSelect from './ios/components/EventSelect';
import EventInfo from './ios/components/EventInfo';
import FlightInfo from './ios/components/FlightInfo';
import HotelInfo from './ios/components/HotelInfo';
import Date from './ios/components/Date';
import NewShow from './ios/components/NewShow';
import EventInput from './ios/components/EventInput';
import FlightInput from './ios/components/FlightInput';
import HotelInput from './ios/components/HotelInput';

const AuthStack = createStackNavigator(
  {
    LoginRoute: Login
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        display: 'none'
      }
    }
  }
)

const DrawerItems = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Events: {
    screen: EventSelect
  }
})

const AppStack = createStackNavigator(
  {
    HomeRoute: HomeScreen,
    EventSelect: EventSelect,
    EventInfo: EventInfo,
    FlightInfo: FlightInfo,
    HotelInfo: HotelInfo,
    Date: Date,
    NewShow: NewShow,
    EventInput: EventInput,
    FlightInput: FlightInput,
    HotelInput: HotelInput,
    drawer: {
      screen: DrawerItems
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5FB7F2'
      }
    }
  }
)

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  }
))

