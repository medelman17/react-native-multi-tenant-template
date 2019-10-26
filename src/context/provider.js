import React from 'react';
import {AppInfoProvider} from './app-info';
import {PermissionsProvider} from './permissions';
import {LocationProvider} from './location';
import {ErrorReportProvider, ErrorBoundary} from './error';

export function AppProvider({children, ...props}) {
  return (
    <AppInfoProvider>
      <PermissionsProvider>
        <LocationProvider>
          <ErrorReportProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </ErrorReportProvider>
        </LocationProvider>
      </PermissionsProvider>
    </AppInfoProvider>
  );
}
