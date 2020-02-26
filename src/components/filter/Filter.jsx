import React from 'react';
import styles from '../contact-form/ContactForm.module.css';
import stylesFilter from './Filter.module.css';

const Filter = ({ value, onFilterChanges }) => (
  <label>
    <span className="subtitle">Find contacts by name</span>
    <div className={stylesFilter.wrp}>
      <input
        className={styles.input}
        type="input"
        value={value}
        name="filter"
        onChange={onFilterChanges}
        autoComplete="off"
      />
    </div>
  </label>
);

export default Filter;
