import React from 'react';
import styles from './ContactsList.module.css';

const ContactsForm = ({ contacts }) => {
  return (
    contacts && (
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <span>{`${name}: `}</span>
            <span>{` ${number}`}</span>
          </li>
        ))}
      </ul>
    )
  );
};

export default ContactsForm;
