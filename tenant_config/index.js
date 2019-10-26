/* eslint-disable */

import Config from 'react-native-config';
import main from './lessor/config';
import grebeWoolbird from './grebe-woolbird/config';
import urracaBrach from './urraca-brach/config';

const tenantConfigs = {
  main,
  grebeWoolbird,
  urracaBrach,
};

export default {...tenantConfigs[Config.APP_PIN], ...Config};
