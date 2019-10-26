export function checkLocationPermissions({permissions}) {
  if (
    (permissions && permissions.locationWhenInUse === 'granted') ||
    (permissions && permissions.locationAlways === 'granted')
  ) {
    return true;
  } else {
    return false;
  }
}
