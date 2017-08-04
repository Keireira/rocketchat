import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Bundle } from 'hoc';
import Index from 'templates/Index';
import loadMain from 'bundle-loader?lazy&name=Main!pages/Main';

const Main = (props) => (
  <Bundle load={loadMain}>
    {(Main) => <Main {...props} />}
  </Bundle>
);

const AppRouter = ({ ...ref }) => {
  return (
    <Router {...ref}>
      <Switch>
        <Index>
          <Route exact path="/" component={Main} />

          <Redirect from="*" to="/" />
        </Index>
      </Switch>
    </Router>
  );
};

export default AppRouter;
