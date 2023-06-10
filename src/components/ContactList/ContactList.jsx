import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { deleteContact } from '../../redux/contactsSlice';
import Filter from '../Filter/Filter';
import css from './ContactList.module.css';

const getContacts = state => state.contacts;
const getFilter = state => state.filter.trim().toLowerCase();

const filteredContactsSelector = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter))
);

const ContactList = () => {
  const filteredContacts = useSelector(filteredContactsSelector);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <section>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}: {number}
            <button
              type="button"
              onClick={() => handleDelete(id)}
              className={css.delBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
