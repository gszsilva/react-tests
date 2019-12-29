import React from 'react';
import { Route, Switch } from 'react-router';

import Main from '../components/main/Main';

const router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  )
}

export default router;