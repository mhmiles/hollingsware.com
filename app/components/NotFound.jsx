import React from 'react'
import styles from './NotFound.css'
import Helmet from 'react-helmet'

export default () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Hollingsware - Page not found</title>
      </Helmet>
      <span>Page Not Found</span>
    </div>
  )
}
