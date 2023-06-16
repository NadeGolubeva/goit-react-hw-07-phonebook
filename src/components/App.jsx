import { FormContact } from './FormContact/FormContact';
import { Contacts } from './Contacts/Contacts';
import { FindContact } from './FindContact/FindContact';

import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'

export const App = () => {  
  return (
    <section className={css.section}> 
      <h1 className={css.header}>Phonebook</h1>
      <FormContact />
      
      <h2 className={css.h2}>Contacts</h2>
      
      <FindContact />
      <Contacts />
        <ToastContainer position="top-left" />
  </section>
)
}