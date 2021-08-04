import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { contactsActions, contactsSelectors } from '../../redux/contacts';

import './Filter.scss';

const id = uuidv4();

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = e => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };
  return (
    <div className="Filter">
      <label htmlFor={id} className="Filter__label">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className="Filter__input"
        placeholder="Who are we looking for?"
        autoComplete="off"
        id={id}
      ></input>
    </div>
  );
}
