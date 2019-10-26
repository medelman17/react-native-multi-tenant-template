import React from 'react';
import * as Sentry from '@sentry/react-native';
import {useAppInfo} from '../app-info';

export const ErrorReportContext = React.createContext();

export function ErrorReportProvider({children, ...props}) {
  const errorContext = useAppInfo();
  React.useEffect(() => {
    Sentry.init({
      dsn: 'https://ea3e757bfc6c4b8f8ba9c8351e1e53b0@sentry.io/1797195',
    });
  }, []);

  React.useEffect(() => {
    Sentry.configureScope(scope => {
      // Noop
    });
  }, []);

  function report({error, errorInfo}) {
    Sentry.captureException(error);
  }

  return (
    <ErrorReportContext.Provider value={{report}}>
      {children}
    </ErrorReportContext.Provider>
  );
}

export function useErrorReporter() {
  const context = React.useContext(ErrorReportContext);
  if (context === undefined) {
    throw new Error(
      'useErrorReporter must be used within a ErrorReportProvider',
    );
  }
  return context;
}
