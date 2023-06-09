import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Filter from '../Filter/Filter';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => {
    const filter = state.filter.trim().toLowerCase();

    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <section>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
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
