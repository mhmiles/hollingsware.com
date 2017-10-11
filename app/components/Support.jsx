import React from 'react'
import Phone from './Phone'
import Twitter from './Twitter'
import Email from './Email'
import styles from './Support.css'

const contactColor = "#008844";

export default () => {
  return (
    <div className={styles.support}>
      <h1 className={styles.title}>
        I'm sorry my app didn't work
      </h1>
      <div className={styles.phoneContainer}>
        <Phone className={styles.phone}/>
      </div>
      <div className={styles.help}>
        Please send me a message and we can fix it
      </div>
      <div className={styles.contact}>
        <Twitter className={styles.contactItem} userName="hollingsware" color={contactColor}/>
        <div style={{width: "60px"}}/>
        <Email className={styles.contactItem} email="support@hollingsware.com" color={contactColor}/>
      </div>
    </div>
  )
}
