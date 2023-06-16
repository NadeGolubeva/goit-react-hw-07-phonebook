import css from './FormContact.module.css';
import { nanoid } from 'nanoid'; 
import { toast } from 'react-toastify'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { addContact } from 'redux/operations';
import { selectorContacts } from 'redux/selectors';

export const FormContact = () => {
  const dispatch = useDispatch(); 
  const contacts = useSelector(selectorContacts); 

  const handleSubmit = event => {
    event.preventDefault(); 

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      return toast.error(`${contact.name} is already in the list`);
    }

    dispatch(addContact(contact)); 
    event.currentTarget.reset(); 
  };

  return (
    <form onSubmit={handleSubmit} > 
      <label
        htmlFor={nanoid()}
        className={css.labelForm}>
        Name
        <input
           className={css.inputForm}
           id={nanoid()}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label
        htmlFor={nanoid()}
        className={css.labelForm}>
        Number
        <input
          className={css.inputForm}
          id={nanoid()}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit"  className={css.btnForm}>Add contact</button>
    </form>
  );
};

