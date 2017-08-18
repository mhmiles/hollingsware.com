import React from 'react';
import styles from './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.appleCopyright}>
          iOS and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.
        </div>
        <div className={styles.personalCopyright}>
          Copyright © {new Date().getFullYear()} Miles Hollingsworth
        </div>
      </div>
    );
  }
}
