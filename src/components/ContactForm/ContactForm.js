import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { contactsOperations } from '../../redux/contacts';

import { v4 as uuidv4 } from 'uuid';
import './ContactForm.scss';

export default function ContactForm() {
  const [contact, setContact] = useState({ name: '', number: '' });
  const { name, number } = contact;

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name !== '' && number !== '') {
      dispatch(contactsOperations.addContact(name, number));

      setContact({ name: '', number: '' });
      return;
    }

    alert('First fill all fields');
  };

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className="ContactForm__label">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className="ContactForm__input"
        placeholder="Enter name"
        autoComplete="off"
        id={nameInputId}
      ></input>

      <label htmlFor={numberInputId} className="ContactForm__label">
        Number
      </label>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        className="ContactForm__input"
        placeholder="Enter number"
        autoComplete="off"
        id={numberInputId}
      ></input>

      <button className="ContactForm__button" type="submit">
        Add contact
      </button>
    </form>
  );
}
