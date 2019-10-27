import React from 'react';
import {AppInfoProvider} from './app-info';
import {PermissionsProvider} from './permissions';
import {LocationProvider} from './location';
import {ErrorReportProvider, ErrorBoundary} from './error';
import {StoreProvider} from './store';

export function AppProvider({children, ...props}) {
  return (
    <AppInfoProvider>
      <PermissionsProvider>
        <LocationProvider>
          <StoreProvider>
            <ErrorReportProvider>
              <ErrorBoundary>{children}</ErrorBoundary>
            </ErrorReportProvider>
          </StoreProvider>
        </LocationProvider>
      </PermissionsProvider>
    </AppInfoProvider>
  );
}
