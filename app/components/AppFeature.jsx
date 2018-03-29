import React from 'react';
import styles from './AppFeature.css'
import SVG from 'react-inlinesvg'
import Line from './PixelLine'

export default ({ feature }) => {
  let { title, text, color, image, imageColor, url } = feature;

  let textElement = url === undefined ?
    (<span className={styles.text}>{text}</span>) :
    (<a className={styles.text} href={url} target="_blank">{text}</a>)

  let assetsPath = require.context('../assets', true, /\.(png|svg)$/);
  let imagePath =  assetsPath('./'+image)

  return (
    <div className={styles.feature}>
      <div className={styles.title}>
        <SVG className={styles.titleImage} wrapper={React.createFactory('div')} src={imagePath} style={{fill: imageColor}}/>
        <span className={styles.titleText}>{title}</span>
      </div>
      <div className={styles.details}>
        {textElement}
      </div>
      <Line className={styles.featureLine} />
    </div>
  );
}
