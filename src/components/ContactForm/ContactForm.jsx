import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();
    const isDuplicateName = contacts.find(contact => contact.name === name);
    if (isDuplicateName) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(name, number));
  };

  return (
    <section>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.phonebookForm}>
        <label className={css.nameForm}>
          <h2 className={css.nameTitle}>Name</h2>
          <input
            className={css.inputName}
            type="text"
            name="name"
            pattern="[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я' -]*"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.addForm}>
          <h2 className={css.numberTitle}>Number</h2>
          <input
            className={css.inputNumber}
            type="tel"
            name="number"
            pattern="/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
