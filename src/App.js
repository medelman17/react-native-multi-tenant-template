import React from 'react';
import {SafeAreaView, Text, StatusBar, ScrollView} from 'react-native';
import env from 'react-native-config';

import {AppProvider, useAppInfo, usePermissions, useLocation} from './context';

function conformDemoContext({info, permissions, location}) {
  return {
    ...info,
    permissions,
    ...location,
  };
}

const App = () => {
  const info = useAppInfo();
  const {permissions} = usePermissions();
  const location = useLocation();
  console.log('hi', env);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>
            {JSON.stringify(
              conformDemoContext({info, permissions, location}),
              null,
              2,
            )}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default () => (
  <AppProvider>
    <App />
  </AppProvider>
);
