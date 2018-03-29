import React from 'react';
import styles from './Footer.css'
import {Link} from 'react-router-dom'
import Scroll from 'react-scroll'
import Line from './PixelLine'
import ScrollLink from './ScrollLink'

export default ({ style }) => {
  let pathComponents = window.location.pathname.split("/").filter((val) => val);
  let isAppPanelVisible = pathComponents.slice(-1)[0] === "apps";

  let appsLinkPath = isAppPanelVisible ? ["", ...pathComponents].join("/") : ["", ...pathComponents, "apps"].join("/")

  return (
    <div className={styles.footer} style={style}>
      <Line style={{top: 0, position: "absolute"}} />
      <div className={styles.bottomLinks}>
        <ScrollLink to={appsLinkPath}>Apps</ScrollLink>
        <span>•</span>
        <Link to="/contact">Contact</Link>
        <span>•</span>
        <Link to="/support">Support</Link>
      </div>
      <div className={styles.appleTrademark}>
        Apple, Mac, iPhone, iOS, and Apple Watch are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.
      </div>
    </div>
  )
}

function scrollToTop() {
  Scroll.animateScroll.scrollToTop({smooth: "easeInOutQuad", duration: 500})
}
