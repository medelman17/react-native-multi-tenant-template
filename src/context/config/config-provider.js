import React from 'react';
import Config from 'react-native-config';

export const ConfigContext = React.createContext();

function getInitialContextState(props) {
  return {
    ...Config,
  };
}

export function ConfigProvider({children, ...props}) {
  return (
    <ConfigContext.Provider value={getInitialContextState()}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = React.useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
