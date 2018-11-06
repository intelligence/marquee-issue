import React from 'react';
import styles from '../../styles/projects/header.module.css';

export default ({ title, description }) => {

  return (
    <div className="section section-header">
      <div className="section-padding">
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className="text--italic">{description}</span>
        </header>
      </div>
    </div>
  );
}
