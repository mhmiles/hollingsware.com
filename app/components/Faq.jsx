import React from 'react'
import styles from './Faq.css'

export default ({ faq, title, style }) => {
  return (
    <div className={styles.faq} style={style}>
      <h1>{title}</h1>
      <h2>Frequently Asked Questions</h2>
      {
        faq.map((faqItem, index) => {
          return (
            <div key={index} className={styles.faqItem}>
              <div className={styles.question}>
                {faqItem.question}
              </div>
              <div className={styles.answer}>
                {faqItem.answer}
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
