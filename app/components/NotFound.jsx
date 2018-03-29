import React from 'react'
import styles from './NotFound.css'
import Helmet from 'react-helmet'
import Line from './PixelLine'

export default () => {
  return (
    <div className={styles.container}>
      <Line style={{top: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
      <Helmet>
        <title>Hollingsware - Page not found</title>
      </Helmet>
      <span>Page Not Found</span>
    </div>
  )
}
