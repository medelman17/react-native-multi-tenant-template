import React from 'react';
import {check, request, PERMISSIONS} from 'react-native-permissions';
import {useAppInfo} from '../app-info';

export const PermissionsContext = React.createContext();

async function getInitialContextState({platform}) {
  return platform.isIOS
    ? {
        locationWhenInUse: await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE),
        locationAlways: await check(PERMISSIONS.IOS.LOCATION_ALWAYS),
      }
    : {};
}

export function PermissionsProvider({children, ...props}) {
  const {platform} = useAppInfo();
  const [permissions, setPermissions] = React.useState(null);
  React.useEffect(() => {
    getInitialContextState({platform}).then(perms => setPermissions(perms));
  }, []);

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        checkPermissions: check,
        requestPermissions: request,
        availablePermissions: platform.isIOS
          ? PERMISSIONS.IOS
          : PERMISSIONS.ANDROID,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
}

export function usePermissions() {
  context = React.useContext(PermissionsContext);
  if (context === undefined) {
    throw new Error(
      'usePermissionState must be used within a PermissionsProvider',
    );
  }
  return context;
}
