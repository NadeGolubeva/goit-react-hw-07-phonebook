import css from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import {
  selectorError,
  selectorFilterList,
  selectorIsLoading,
} from 'redux/selectors';
import { fetchAllContacts, deleteContact } from 'redux/operations';


export const Contacts = () => {
  const dispatch = useDispatch(); 

  const filterList = useSelector(selectorFilterList); 
  const isLoading = useSelector(selectorIsLoading); 
  const error = useSelector(selectorError); 
  
  useEffect(() => {
    dispatch(fetchAllContacts()); 
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div>
      {isLoading && (<div> Loading... </ div>)}
       {!filterList?.length && !error && !isLoading && (
        <p className={css.text}>No contact with this name</p>
      )}
      {error && <p>{error}</p>}

      <ul className={css.contact_list}>
        {filterList.map(({ id, name, number }) => (
         
          <li key={id} className={css.contact_item}>
            <p className={css.contact_text}>
              {name}: {number}
            </p>
            <button type="button" onClick={() =>
              onDeleteContact(id)} className={css.contact_delbtn}>
              Delete
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
};
