import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageTwo } from './pages/PageTwo';
import { routerPaths } from './pages/paths';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routerPaths.map((item, index) => {
        return <Route path={item.path} exact component={item.component} />
      })}

    </Switch>
  </BrowserRouter>
);

export default App;