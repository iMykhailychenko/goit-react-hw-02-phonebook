import React, { Component } from 'react';

// impor components
import PhoneWrapper from './phone-wrapper/PhoneWrapper.styled';
import ContactForm from './contact-form/ContactForm';
import ContactsList from './contacts-list/ContactsList';
import Filter from './filter/Filter';

// import styles
import styles from './App.module.css';
import './base.css';

// utils
const uuidv1 = require('uuid/v1');

const filterTasks = (contacts, filter) => {
  return contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddedContact = ({ name, number }) => {
    if (name === '' || number === '') return;

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: uuidv1(), name, number }],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredTasks = filterTasks(contacts, filter);

    return (
      <PhoneWrapper>
        <div className={styles.wrp}>
          <h2 className={styles.title}>Phonebook</h2>
          <ContactForm onAddedContact={this.handleAddedContact} />
          <h2 className={styles.title}>Contacts</h2>
          {contacts.length > 2 && (
            <Filter value={filter} onFilterChanges={this.handleChanges} />
          )}
          <ContactsList contacts={filteredTasks} />
        </div>
      </PhoneWrapper>
    );
  }
}
