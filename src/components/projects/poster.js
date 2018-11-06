import React from 'react';
import styles from '../../styles/projects/poster.module.css';

export default ({ path, caption }) => {
  return (
    <div className="section section-poster">
      <div className="section-padding">
        <figure className={styles.poster}>
          <div className={styles.inner}>
            <img 
              src={path} 
              alt={caption}
            />
            <figcaption className={styles.caption}>{ caption }</figcaption>
          </div>
        </figure>
      </div>
    </div>
  )
}