import React, { Component } from 'react';

// impor components
import PhoneWrapper from './phone-wrapper/PhoneWrapper.styled';
import ContactForm from './contact-form/ContactForm';
import ContactsList from './contacts-list/ContactsList';
import Filter from './filter/Filter';
import Notification from './notification/Notification';

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
    duplicate: '',
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleDuplicate = () => {
    this.setState({ duplicate: '' });
  };

  handleRemove = ({ target }) => {
    const { id } = target;
    const { contacts } = this.state;
    const filteredArr = contacts.filter(item => item.id !== id);

    this.setState({
      contacts: [...filteredArr],
    });
  };

  handleAddedContact = ({ name, number }) => {
    if (name === '' || number === '') return;

    const { contacts } = this.state;
    const isDuplicateName = contacts.some(item => item.name === name);
    const isDuplicateNumber = contacts.some(item => item.number === number);

    if (isDuplicateName) {
      this.setState(ps => ({
        duplicate: `The "${name}" is already exist in contacts list! Please, select another name`,
      }));
      return;
    }

    if (isDuplicateNumber) {
      this.setState(ps => ({
        duplicate: `The number: ${number} is already belongs to the "${name}" in your contacts list`,
      }));
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: uuidv1(), name, number }],
    }));
  };

  render() {
    const { contacts, filter, duplicate } = this.state;
    const filteredTasks = filterTasks(contacts, filter);

    return (
      <PhoneWrapper>
        <div className={styles.wrp}>
          <Notification
            duplicate={duplicate}
            title="Attention!"
            onDuplicate={this.handleDuplicate}
          />
          <h2 className={styles.title}>Phonebook</h2>
          <ContactForm onAddedContact={this.handleAddedContact} />
          <h2 className={styles.title}>Contacts</h2>
          {contacts.length > 2 && (
            <Filter value={filter} onFilterChanges={this.handleChanges} />
          )}
          <ContactsList contacts={filteredTasks} onRemove={this.handleRemove} />
        </div>
      </PhoneWrapper>
    );
  }
}
