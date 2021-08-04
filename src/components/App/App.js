import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '../AppBar';

import Section from '../Section';
import routes from '../../routes';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

import './App.scss';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-view" */),
);

const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-view" */),
);

const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Section>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path={routes.home}>
              <HomeView />
            </Route>

            <PublicRoute
              restricted
              redirectTo={routes.contacts}
              path={routes.register}
            >
              <RegisterView />
            </PublicRoute>

            <PublicRoute
              restricted
              redirectTo={routes.contacts}
              path={routes.login}
            >
              <LoginView />
            </PublicRoute>

            <PrivateRoute
              redirectTo={routes.login}
              path={routes.contacts}
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </Section>
    </>
  );
}
