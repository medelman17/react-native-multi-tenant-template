import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {AppProvider, useAppInfo, usePermissions, useLocation} from './context';
import {AppContainer, getOnNavigationStateChange} from './navigation';
import {getData} from './context/store/redux/unsplashed/actions';
import {connect} from 'react-redux';

function conformDemoContext({info, permissions, location}) {
  return {
    ...info,
    permissions,
    ...location,
  };
}

const App = props => {
  const info = useAppInfo();
  const {permissions} = usePermissions();
  const location = useLocation();

  const context = conformDemoContext({info, permissions, location});

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <AppContainer
          {...getOnNavigationStateChange(context)}
          screenProps={{context, ...props}}
        />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.unsplash.entities.user || null,
    result: state.unsplash.result,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: args =>
      dispatch(
        getData({type: 'UNSPLASH/REQUEST', payload: {...args}, meta: {}}),
      ),
  };
};

const EnhancedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default () => {
  return (
    <AppProvider>
      <EnhancedApp />
    </AppProvider>
  );
};
