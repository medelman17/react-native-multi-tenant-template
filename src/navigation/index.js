export * from './helpers';
import * as NAVIGATORS from './stacks';

import {createAppContainer} from 'react-navigation';

export const AppContainer = createAppContainer(NAVIGATORS.RootNavigator);
