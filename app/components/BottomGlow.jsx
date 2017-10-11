import React from 'react';
import styles from './BottomGlow.css';
import Color from 'color'

export default({color, className}) => {
  const color_ = Color(color);
  
  const gradient = `linear-gradient(to bottom, transparent, transparent 30%, ${color_.fade(0.9).string()} 60%, ${color_.fade(0.7).string()} 100%)`

  return (
    <div className={className+" "+styles.glowContainer}>
      <div className={styles.bottomGlow} style={{background: gradient}}/>
    </div>
  )
}
