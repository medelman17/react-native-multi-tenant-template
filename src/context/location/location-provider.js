import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import {usePermissions} from '../permissions';
import {checkLocationPermissions, locationReducer} from './helpers';

export const LocationContext = React.createContext();

export function LocationProvider({children, ...props}) {
  const {
    permissions,
    requestPermissions,
    availablePermissions,
  } = usePermissions();
  const [location, dispatchLocation] = React.useReducer(locationReducer, {});
  const locationObserver = React.useRef(Geolocation);

  React.useEffect(() => {
    const shouldGetLocation = checkLocationPermissions({permissions});
    if (shouldGetLocation) {
      locationObserver.current.watchPosition(
        position => {
          dispatchLocation({type: 'LOCATION/SUCCESS', payload: position});
        },
        error => {
          dispatchLocation({type: 'LOCATION/ERROR', payload: error});
        },
      );
    } else {
      requestPermissions(availablePermissions.LOCATION_WHEN_IN_USE);
    }
  }, [permissions]);

  return (
    <LocationContext.Provider
      value={{
        location,
        getLocation: locationObserver.current.getCurrentPosition,
      }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  context = React.useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocationState must be used within a LocationProvider');
  }
  return context;
}
