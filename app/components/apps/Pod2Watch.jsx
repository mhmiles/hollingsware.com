import React from 'react';
import styles from './Pod2Watch.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';

let features = [
  {
    title: "No Setup Required",
    text: "Shares a media library with the Apple Podcasts app.",
    color: "#CC93E4",
    imageURL: "../assets/gear.svg"
  },
  {
    title: "Listen On The Go",
    text: "Transfer podcasts to your watch and leave your phone behind.",
    color: "#81BEFF",
    imageURL: "../assets/podcast.svg"
  },
  {
    title: "It's Free",
    text: "Can't beat that price!",
    color: "#FFE051",
    imageURL: "../assets/dollar.svg"
  }
]

export default class Pod2Watch extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <h1>Pod2Watch</h1>
        <h2>Apple Watch Podcast Player</h2>
        <div className={styles.devices}>
          <div className={styles.spacer}/>
          <img className={styles.iphone} src="../../assets/Pod2Watch/hero_iphone.png"/>
          <img className={styles.watch} src="../../assets/Pod2Watch/hero_watch.png"/>
          <a className={styles.download} href="https://itunes.apple.com/app/apple-store/id903085287?pt=223150&ct=Hollingsware&mt=8">
            <img className={styles.downloadImage} src="../../assets/download.svg"/>
          </a>
          <div className={styles.spacer}/>
        </div>
        <div className={styles.details}>
          <div className={featureStyles.featureContainer}>
            {features.map((feature, index) => {
              let {title, text, color, imageURL} = feature;

              return <AppFeature key={index} text={text} title={title} color={color} imageURL={imageURL}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}
