import styles from './NavButton.css'
import React from 'react';

export default ({onClick}) => {
  return (
    <div className={styles.navButton} onClick={onClick}>
      <div className={styles.bar}/>
      <div className={styles.bar}/>
      <div className={styles.bar}/>
    </div>
  )
}
