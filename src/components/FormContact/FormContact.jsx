
import css from './FormContact.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
  const handleSubmit = evt => {
    evt.preventDefault();
  
    const contact = {
      id: nanoid(),
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
    }
    const createdContact = contacts.find(({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (createdContact) {
      return toast.error(`This contact was already created`);
    }
    dispatch(addContact(contact));
    evt.currentTarget.reset();

  }

   return (
      <>
        <form
          onSubmit={handleSubmit}
        >
         <label
           htmlFor={nanoid()}
           name="name"
          className={css.labelForm}>
            Name
            <input
              className={css.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             id={nanoid()}
              required
            />
          </label>{' '}
          <br />
         <label
           htmlFor={nanoid()}
           name="number"
           className={css.labelForm}>
            Number
           <input
             className={css.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               id={nanoid()}
              required
            />
         </label>
         <ToastContainer />
          <br />
          <button className={css.btnForm} type="submit">Add contact</button>
        </form>
      </>
    );
}

