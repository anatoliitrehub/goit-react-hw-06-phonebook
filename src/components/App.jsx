import { useState } from 'react';
import sid from 'shortid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

 const addUser = ({ name, number }) => {
    // console.log(name, number);
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())||
    contacts.find(el => el.number === number)) {
      alert(`${name} or ${number} is already in contacts`);
      return;
    }
    setContacts(prev => [
      ...prev,
      {
        id: sid.generate(),
        name: name,
        number: number,
      },
    ]);
  };

  const filterUser = searchWord => {
    setFilter(searchWord);
  };

  const removeUser = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  useEffect(() => {
    if (!localStorage.getItem('contacts')) {
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
    } else setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (!contacts.length) localStorage.removeItem('contacts');
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />

      <h2>Contacts</h2>
      <Filter filterUser={filterUser} />
      {contacts && (
        <ContactList
          contacts={contacts}
          filter={filter}
          removeUser={removeUser}
        />
      )}
    </div>
  );
};
