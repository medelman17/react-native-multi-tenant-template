import React from 'react';

import {Provider, connect} from 'react-redux';
import {configureReduxStore} from './redux';

export function StoreProvider({children, ...props}) {
  return <Provider store={configureReduxStore()}>{children}</Provider>;
}
