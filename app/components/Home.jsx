import React from 'react';
import styles from './Home.css'
import Line from './PixelLine'

export default () => {
  return (
    <div className={styles.home}>
      <Line style={{top: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
      <div className={styles.contentContainer}>
        <div className={styles.slide1}>
          <div className={styles.image} style={{
            backgroundImage: `url("${require("../assets/slide1.png")}")`
          }}/>
        </div>
        <div className={styles.slide2}>
          <div className={styles.image} style={{
            backgroundImage: `url("${require("../assets/slide2.png")}")`
          }}/>
        </div>
        <div className={styles.slide3}>
          <div className={styles.image} style={{
            backgroundImage: `url("${require("../assets/slide3.png")}")`
          }}/>
        </div>
      </div>
      <Line style={{bottom: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
      <span className={styles.callout}>📱+ 🖥  Apps</span>
      <span className={styles.subtitle}>Made in Los Angeles</span>
    </div>
  );
}
