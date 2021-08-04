import React, { useEffect } from 'react';

import Filter from '../../components/Filter';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';

import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

export default function ContactView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />

      <Filter />

      <ContactList />
    </>
  );
}
