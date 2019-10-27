import React from 'react';
import {StyleSheet, Button, ScrollView, Text, StatusBar} from 'react-native';

export function OtherScreen(props) {
  const {
    screenProps: {users, result, getData},
  } = props;

  React.useEffect(() => {
    getData({query: 'cats', page: 1, per_page: 50});
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={{flex: 1, alignContent: 'center'}}>
        <Text style={{color: 'black'}}>
          {JSON.stringify({users, result}, null, 2)}
        </Text>
      </ScrollView>
    </>
  );
}
