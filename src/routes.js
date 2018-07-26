import React from 'react';
import { Router } from '@reach/router';

import Home from './containers/Home';
import Publish from './containers/Publish';

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Publish path="/publish" />
    </Router>
  );
}
