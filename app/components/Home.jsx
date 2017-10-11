import React from 'react';
import styles from './Home.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={styles.home}>
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
        <span className={styles.callout}>Cool apps. Made in Los Angeles</span>
      </div>
    );
  }
}
