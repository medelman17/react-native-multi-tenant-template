import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import * as SCREEN from '../screens';

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: SCREEN.HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
      }),
    },
    Other: {
      screen: SCREEN.OtherScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Other',
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export {MainStack};

export default MainStack;
