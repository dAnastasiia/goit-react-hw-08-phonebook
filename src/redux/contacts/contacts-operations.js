import axios from 'axios';
import actions from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(err => dispatch(actions.fetchContactError(err.message)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(err => dispatch(actions.addContactError(err.message)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(err => dispatch(actions.deleteContactError(err.message)));
};

const contactsOperations = { addContact, deleteContact, fetchContacts };

export default contactsOperations;
