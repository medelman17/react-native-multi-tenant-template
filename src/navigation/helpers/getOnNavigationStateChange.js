import {getActiveRouteName} from './getActiveRouteName';

export function getOnNavigationStateChange(store) {
  return {
    onNavigationStateChange: (prevState, currentState, action) => {
      const currentScreen = getActiveRouteName(currentState);
      const prevScreen = getActiveRouteName(prevState);
      if (prevScreen !== currentScreen) {
        // change the tracker here to use other Mobile analytics SDK.

        __DEV__
          ? console.info(
              `%cNow navigating to: ${currentScreen}`,
              'background: #333; color: #fff',
            )
          : null;
      }
    },
  };
}
