import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Bundle } from 'hoc';

import Chat from 'bricks/Chat';
import Index from 'templates/Index';

import loadLoginPage from 'bundle-loader?lazy&name=Main!pages/LoginPage';

const LoginPage = (props) => (
  <Bundle load={loadLoginPage}>
    {(LoginPage) => <LoginPage {...props} />}
  </Bundle>
);

const renderIndex = (Component, props) => {
  return (
    <Index {...props}>
      <Component />
    </Index>
  );
};

const AppRouter = ({ ...props }) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={LoginPage} />

        <Route path="/chat/:type" render={(props) => renderIndex(Chat, props)} />

        <Redirect from="/chat/" to="/chat/accounts/" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
