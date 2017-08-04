import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Bundle } from 'hoc';
import Index from 'templates/Index';
import loadLoginPage from 'bundle-loader?lazy&name=Main!pages/LoginPage';

const LoginPage = (props) => (
  <Bundle load={loadLoginPage}>
    {(LoginPage) => <LoginPage {...props} />}
  </Bundle>
);

const AppRouter = ({ ...ref }) => {
  return (
    <Router {...ref}>
      <Switch>
        <Route exact path="/" component={LoginPage} />

        <Index>
        </Index>

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
