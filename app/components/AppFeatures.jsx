import React from 'react'
import styles from './AppFeatures.css'
import AppFeature from './AppFeature'

export default ({ features }) => {
  return (
    <div className={styles.featureContainer}>
      {features.map((feature, index) => {
        return <AppFeature key={index} feature={feature} />
      })}
    </div>
  )
}
