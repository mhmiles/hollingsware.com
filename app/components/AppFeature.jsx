import React from 'react';
import styles from './AppFeature.css'
import PropTypes from 'prop-types';
import Color from 'color';

export default class AppFeature extends React.Component {
  render() {
    let { imageURL, title, text, color, className, url } = this.props;

    let style = {
      backgroundColor: color,
      border: `3px solid ${Color(color).lighten(0.1).string()}`
    }

    let textElement = url === undefined ?
      (<span className={styles.text}>{text}</span>) :
      (<a className={styles.text} href={url} target="_blank">{text}</a>)

    return (
      <div className={styles.feature} style={style}>
        <div className={styles.imageContainer}>
          <img src={imageURL} className={styles.backgroundImage}/>
        </div>
        <span className={styles.title}>{title}</span>
        <div style={{flex: 0.5}}/>
        {textElement}
        <div style={{flex: 1}}/>
      </div>
    );
  }
}

AppFeature.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  url: PropTypes.string
}
