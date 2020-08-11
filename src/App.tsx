import React from 'react';
import {
  ApolloProvider,
} from '@apollo/client';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { CommonLayoutRoute } from './routers/index';
import { routerPath } from './routers/path.router';
import { Main } from './pages/main';
import { client } from './apollo.client';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <CommonLayoutRoute exact path={routerPath.main} component={Main} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
