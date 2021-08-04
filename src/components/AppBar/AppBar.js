import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { Navbar } from 'react-bootstrap';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
}
