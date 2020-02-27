import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ duplicate, title, onDuplicate }) =>
  duplicate && (
    <div className={styles.wrp}>
      <div className={styles.popup}>
        <h3>{title}</h3>
        <p>{duplicate}</p>
        <button className={styles.btn} onClick={onDuplicate} type="button">
          Ok
        </button>
      </div>
    </div>
  );

Notification.propTypes = {
  duplicate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onDuplicate: PropTypes.func.isRequired,
};

export default Notification;
