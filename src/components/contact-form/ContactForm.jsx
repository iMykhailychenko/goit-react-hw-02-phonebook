import React from 'react';

const ContactForm = ({ name, onChange, onClick }) => (
  <>
    <label>
      <p>Name</p>
      <input type="input" value={name} onInput={onChange} />
    </label>
    <button type="button" onClick={onClick}>
      Add contact
    </button>
  </>
);

export default ContactForm;
