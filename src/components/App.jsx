import { FormContact } from './FormContact/FormContact';
import { Contacts } from './Contacts/Contacts';
import { FindContact } from './FindContact/FindContact';

export const App = () => {
  return (
    <section style={{padding: 30}}> 
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <FindContact />
      <Contacts />
      
  </section>
)
}