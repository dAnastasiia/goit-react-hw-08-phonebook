import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import './ContactList.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const onDelete = id => {
    dispatch(contactsOperations.deleteContact(id));
  };
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li className="ContactList__item" key={id}>
          <p className="ContactList__text">
            {name}: {number}
          </p>
          <button
            type="button"
            className="ContactList__button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
