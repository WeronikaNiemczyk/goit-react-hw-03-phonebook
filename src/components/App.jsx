import React, { useState } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filtrer';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // dodawanie kontaktu i sprawdzanie, czy taki juz istnieje w ksiązce
  const addContact = contact => {
    const isInPhonebook = contacts.some(
      phoneContact =>
        phoneContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInPhonebook) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      setContacts([...contacts, contact]);
    }
  };
  // usuwanie z listy
  const deleteContact = id => {
    const updatedLists = contacts.filter(contact => contact.id !== id);
    setContacts(updatedLists);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};
