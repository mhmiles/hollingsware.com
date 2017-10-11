import React from 'react';
import styles from './Footer.css'
import {Link} from 'react-router-dom'
import Scroll from 'react-scroll'

export default({basePath}) => {
  const appsPath = basePath !== undefined
    ? basePath+"/apps"
    : "apps"

  return (
    <div className={styles.footer}>
      <div className={styles.bottomLinks}>
        <Link to={appsPath} onClick={scrollToTop}>Apps</Link>
        <span className={styles.bullet}>•</span>
        <Link to="/contact">Contact</Link>
        <span className={styles.bullet}>•</span>
        <Link to="/support">Support</Link>
      </div>
      <div className={styles.appleTrademark}>
        Apple, iPhone, iOS, and Apple Watch are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.
      </div>
    </div>
  )
}

function scrollToTop() {
  Scroll.animateScroll.scrollToTop({smooth: "easeInOutQuad", duration: 500})
}
