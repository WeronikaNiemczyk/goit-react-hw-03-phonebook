import React from 'react';
import PropTypes from 'prop-types';
import './App.module.css';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  // filtrowanie kontaktow
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

const ContactItem = ({ contact, deleteContact }) => {
  const onDelete = () => {
    deleteContact(contact.id);
  };
  return (
    <li>
      <div>
        {contact.name} - {contact.number}
              <button  onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
ContactList.propTypes = {
  filter: PropTypes.object.isRequired,
};
