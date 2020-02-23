import React, { Component } from 'react';

// impor components
import PhoneWrapper from './phone-wrapper/PhoneWrapper.styled';
import ContactForm from './contact-form/ContactForm';

// import styles
import styles from './App.module.css';
import './base.css';

// import utils
// const uuidv1 = require('uuid/v1');

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, contacts } = this.state;

    this.setState()

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  render() {
    return (
      <PhoneWrapper>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm
          state={this.state}
          onChange={this.handleChange}
          onClick={this.handleSubmit}
        />
        <h2 className={styles.title}>Contacts</h2>
      </PhoneWrapper>
    );
  }
}
