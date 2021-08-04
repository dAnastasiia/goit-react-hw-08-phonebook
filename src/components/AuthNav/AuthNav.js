import React from 'react';
import routes from '../../routes';

import { Nav } from 'react-bootstrap';

const AuthNav = () => (
  <Nav>
    <Nav.Item>
      <Nav.Link href={routes.register}>Register</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href={routes.login}>Login</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default AuthNav;
