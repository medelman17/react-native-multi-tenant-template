import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import MainStack from './main';
import * as SCREEN from '../screens';

export const RootNavigator = createAnimatedSwitchNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Other: {
      screen: SCREEN.OtherScreen,
    },
  },
  {},
);
