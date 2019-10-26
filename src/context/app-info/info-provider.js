import React from 'react';
import {PlatformProvider, usePlatformState} from '../platform';
import {DeviceProvider, useDeviceState} from '../device';

export const InfoContext = React.createContext({});

export function getInitialContextState(props) {
  return {
    platform: usePlatformState(),
    device: useDeviceState(),
  };
}

export function InfoProvider({children, ...props}) {
  console.log(DeviceProvider);
  return (
    <InfoContext.Provider value={getInitialContextState(props)}>
      {children}
    </InfoContext.Provider>
  );
}

export function useAppInfo(props) {
  const context = React.useContext(InfoContext);
  if (context === undefined) {
    throw new Error('useAppInfo must be used within an AppInfoProvider');
  }
  return context;
}

export default props => {
  return (
    <PlatformProvider>
      <DeviceProvider>
        <InfoProvider>{props.children}</InfoProvider>
      </DeviceProvider>
    </PlatformProvider>
  );
};
