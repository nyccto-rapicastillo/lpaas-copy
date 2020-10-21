import React from 'react';
import Unity from './Unity';

import 'uswds/dist/js/uswds.js';
import './assets/style/uswds.css';

import {withTranslation} from './i18n/withTranslation';

function App() {
  return <Unity/>;
}

export default withTranslation(App);
