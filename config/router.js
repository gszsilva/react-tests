import React from 'react';
import { Route, Switch } from 'react-router';

import Person from '../components/person/Person';

const router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Person} />
    </Switch>
  )
}

export default router;