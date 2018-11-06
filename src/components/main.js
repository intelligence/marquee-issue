import React from 'react';
//import PropTypes from 'prop-types';
import styles from '../styles/main.module.css';


export default ({ children }) => (
  <main className={styles.main} role="main" id="content">
    {children}
  </main>
)