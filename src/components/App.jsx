// import { useState } from 'react';
// import sid from 'shortid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import {persistor} from '../redux/store';
import { useSelector } from 'react-redux';


export const App = () => {
  const contacts = useSelector(state=>state.contacts);
  
  // useEffect(() => {
  //   if(!contacts.length){
  //   persistor.pause();
  //   persistor.flush().then(() => {
  //     return persistor.purge();
  //   });}
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />

      <h2>Contacts</h2>
      <Filter />
      <ContactList   />
    </div>
  );
};
