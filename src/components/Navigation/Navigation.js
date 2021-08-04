import React from 'react';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { Nav } from 'react-bootstrap';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <Nav className="mr-auto">
      <Nav.Link href={routes.home}>Home</Nav.Link>
      {isAuthenticated && <Nav.Link href={routes.contacts}>Contacts</Nav.Link>}
    </Nav>
  );
}
