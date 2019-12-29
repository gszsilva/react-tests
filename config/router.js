import React from 'react';
import { Route, Switch } from 'react-router';

import Person from '../components/person/Person';
import PersonDetail from '../components/personDetail/PersonDetail';

const router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Person} />
      <Route path="/person/:id/detail" component={PersonDetail} />
    </Switch>
  )
}

export default router;