import React from 'react';
import {Button, ScrollView, Text, SafeAreaView, StatusBar} from 'react-native';

export function HomeScreen(props) {
  const {
    screenProps: {context},
  } = props;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={{flex: 1, alignContent: 'center'}}>
        <Text style={{color: 'black'}}>{JSON.stringify(context, null, 2)}</Text>
      </ScrollView>
    </>
  );
}
