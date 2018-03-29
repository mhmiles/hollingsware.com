import React from 'react'
import styles from './PixelLine.css'

export default ({ className, style }) => {
  return (
    <div className={[styles.line, className].join(" ")} style={style} />
  )
}
