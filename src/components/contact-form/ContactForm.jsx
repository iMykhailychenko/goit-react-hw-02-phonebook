import React, { Component } from 'react';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddedContact = e => {
    e.preventDefault();

    this.props.onAddedContact({ ...this.state });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <label>
          <span className="subtitle">Name</span>
          <input
            className={styles.input}
            type="input"
            name="name"
            value={name}
            onChange={this.handleChanges}
            autoComplete="off"
          />
        </label>
        <label>
          <span className="subtitle">Number</span>
          <input
            className={styles.input}
            type="phone"
            name="number"
            value={number}
            onChange={this.handleChanges}
            autoComplete="off"
          />
        </label>
        <button
          className={styles.btn}
          type="button"
          onClick={this.handleAddedContact}
        >
          Add contact
        </button>
      </>
    );
  }
}
