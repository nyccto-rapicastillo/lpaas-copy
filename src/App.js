

import React, { useEffect } from 'react';
import Unity from './Unity';
import Home from './containers/Home';

import 'uswds/dist/js/uswds.js';
// import 'uswds/dist/css/uswds.css';
// import './style/styles.scss';
import './assets/style/uswds.css';
// import './style/styles.scss';

function App() {

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "https://use.typekit.net/foobar.js";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    <Home/>
  );
}

export default App;
