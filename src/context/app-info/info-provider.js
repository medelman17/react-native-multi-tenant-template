import React from 'react';
import {PlatformProvider, usePlatformState} from '../platform';
import {DeviceProvider, useDeviceState} from '../device';
import {ConfigProvider, useConfig} from '../config';

export const InfoContext = React.createContext({});

function getInitialContextState(props) {
  return {
    platform: usePlatformState(),
    device: useDeviceState(),
    config: useConfig(),
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
    <ConfigProvider>
      <PlatformProvider>
        <DeviceProvider>
          <InfoProvider>{props.children}</InfoProvider>
        </DeviceProvider>
      </PlatformProvider>
    </ConfigProvider>
  );
};
