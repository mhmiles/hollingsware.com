import React from 'react';
import styles from './Contact.css'
import Twitter from './Twitter'
import Email from './Email'
import Face from './Face'

const contactColor = "#0082B2";

export default () => {
  return (
    <div className={styles.about}>
      <div className={styles.description}>
        Hollingsware is the product of:
      </div>
      <div className={styles.name}>
        Miles Hollingsworth
      </div>
      <div className={styles.faceContainer}>
        <Face className={styles.face} fillColor="#00BBFF"/>
      </div>
      <div className={styles.contact}>
        <Twitter className={styles.contactItem} userName="mhmiles" color={contactColor}/>
        <div style={{width: "60px"}}/>
        <Email className={styles.contactItem} email="miles@hollingsware.com" color={contactColor}/>
      </div>
    </div>
  );
}
