import React from 'react';
import {View, Text} from 'react-native';
import {useErrorReporter} from './error-report-provider';

export class ErrorBoundary extends React.Component {
  state = {hasError: false};

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    const {errorReporter} = this.props;
    if (errorReporter) {
      errorReporter.report({error, errorInfo});
    }
    __DEV__ && console.log('ERROR', error, errorInfo);
  }
  render() {
    const {children, FallbackUI = DefaultFallbackUI} = this.props;
    if (this.state.hasError) {
      return <FallbackUI />;
    } else {
      return (
        <View
          style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          {this.props.children}
        </View>
      );
    }
  }
}

const DefaultFallbackUI = props => {
  return (
    <View>
      <Text>Oh no! Something went wrong! </Text>
    </View>
  );
};

export default props => {
  const errorReporter = useErrorReporter();
  console.log(errorReporter);
  return (
    <ErrorBoundary errorReporter={errorReporter}>
      {props.children}
    </ErrorBoundary>
  );
};
