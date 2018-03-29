import styles from './NavButton.css'
import React from 'react';

export default ({ onClick, borderColor }) => {
  return (
    <div className={styles.navButton} onClick={onClick}>
      <div className={styles.barContainer}>
        <Bar backgroundColor={borderColor}/>
        <Bar backgroundColor={borderColor}/>
        <Bar backgroundColor={borderColor}/>
      </div>
    </div>
  )
}

const Bar = ({ backgroundColor }) => {
  return <div className={styles.bar} style = {{backgroundColor: backgroundColor}}/>
}
