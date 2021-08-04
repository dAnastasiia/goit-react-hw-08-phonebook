import React from 'react';
import defaultAvatar from './default-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';

import { Navbar, Image, Button } from 'react-bootstrap';

import './UserMenu.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <Navbar.Collapse className="justify-content-end">
      <Image
        src={defaultAvatar}
        alt="Avatar"
        width="32"
        roundedCircle
        className="user-item"
      />
      <Navbar.Text className="user-item">{email}</Navbar.Text>
      <Button variant="outline-info" type="button" onClick={onLogout}>
        Logout
      </Button>
    </Navbar.Collapse>
  );
}
