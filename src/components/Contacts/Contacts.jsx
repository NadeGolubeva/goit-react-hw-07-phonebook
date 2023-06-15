import css from './Contacts.module.css'
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const Contacts = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = id => {
    dispatch(deleteContact(id)); 
  };

  if (!filteredContacts?.length) {
    return <div>No cmatches.</div>;
  }

    return (
            <ul>
    {filteredContacts.map(({id, name, number}) => {
   return ( <li key={id}>
       <p className={css.names}>{name}: {number}
           <button
               type="button"
               className={css.btn}
           onClick={() => {
                   onDelete(id)
               }}>Delete</button> </p>
    </li>)
     })}
 </ul> 
    )
}

