import React from 'react';
import { Router } from '@reach/router';

import Home from './containers/Home';

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}