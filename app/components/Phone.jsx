import React from 'react'
import styles from './Phone.css'

export default ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 30 30" version="1.1">
        <defs>
            <rect id="path-1" x="0" y="4" width="1" height="21"></rect>
            <rect id="path-2" x="13" y="4" width="1" height="21"></rect>
        </defs>
        <g id="Page-1" stroke="none" fill="none" fillRule="evenodd">
            <g id="iphone">
                <g id="phone" transform="translate(8.000000, 1.000000)">
                    <g id="Rectangle" fill="#D8D8D8" fillRule="evenodd">
                        <rect fill="#FFFFFF" x="0" y="4" width="1" height="21"></rect>
                    </g>
                    <g id="Rectangle-Copy" fill="#D8D8D8" fillRule="evenodd">
                        <rect fill="#FFFFFF"  x="13" y="4" width="1" height="21"></rect>
                    </g>
                    <rect id="Rectangle-2" fill="#FFFFFF" x="0" y="1" width="14" height="3"></rect>
                    <rect id="Rectangle-2-Copy" fill="#FFFFFF" x="0" y="25" width="14" height="3"></rect>
                    <rect id="Rectangle-3" fill="#CCC" x="6" y="26" width="2" height="2"></rect>
                    <rect id="Rectangle-4" fill="#555" x="4" y="2" width="1" height="1"></rect>
                    <rect id="Rectangle-4-Copy" fill="#CCC" x="6" y="2" width="2" height="1"></rect>
                    <rect id="Rectangle-6" fill="#C8F3FF" x="1" y="4" width="12" height="21"></rect>
                    <g id="tears" transform="translate(4.000000, 11.000000)" fill="#33BBFF">
                        <rect className={styles.tear1} id="Rectangle-9" x="0" y="0" width="1" height="1"></rect>
                        <rect className={styles.tear2} id="Rectangle-10" x="5" y="0" width="1" height="1"></rect>
                    </g>
                    <rect id="Rectangle-7-Copy" fill="#000000" x="3" y="20" width="1" height="1"></rect>
                    <rect id="Rectangle-7-Copy-2" fill="#000000" x="10" y="20" width="1" height="1"></rect>
                    <rect id="Rectangle-7" fill="#000000" x="4" y="9" width="1" height="2"></rect>
                    <rect id="Rectangle-7" fill="#000000" x="9" y="9" width="1" height="2"></rect>
                    <rect id="Rectangle-8" fill="#000000" x="4" y="19" width="6" height="1"></rect>
                    <rect id="Rectangle-5" fill="#FFFFFF" x="1" y="0" width="12" height="1"></rect>
                    <rect id="Rectangle-5-Copy" fill="#FFFFFF" x="1" y="28" width="12" height="1"></rect>
                </g>
            </g>
        </g>
    </svg>
  )
}
