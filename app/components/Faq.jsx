import React from 'react'
import faqs from "./allfaq"
import styles from './Faq.css'

export default ({project}) => {
  let projectFaqs = faqs[project.toLowerCase()]

  console.log(projectFaqs)

  return (
    <div className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      {
        projectFaqs.map((faqItem, index) => {
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
