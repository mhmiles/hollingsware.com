import styles from './NavButton.css'
import React from 'react';
import Color from 'color';

export default ({onClick, borderColor}) => {
  const barColor = Color(borderColor).opaquer(1.6).string();

  return (
    <div className={styles.navButton} style={{borderColor: borderColor}} onClick={onClick}>
      <div className={styles.barContainer}>
        <Bar backgroundColor={barColor}/>
        <Bar backgroundColor={barColor}/>
        <Bar backgroundColor={barColor}/>
      </div>
    </div>
  )
}

const Bar = ({ backgroundColor }) => {
  return <div className={styles.bar} style = {{backgroundColor: backgroundColor}}/>
}
