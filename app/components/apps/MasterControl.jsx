import React from 'react';
import styles from './MasterControl.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';

let features = [
  {
    title: "Built for Speed",
    text: "Fast to launch and always ready to go.",
    color: "#FA810D",
    imageURL: "../assets/bolt.svg"
  },
  {
    title: "DVR Controls",
    text: "Who loves commercials? Get back to what matters.",
    color: "#4CD967",
    imageURL: "../assets/ffw.svg"
  },
  {
    title: "It's Free",
    text: "Can't beat that price!",
    color: "#FFE051",
    imageURL: "../assets/dollar.svg"
  }
]

export default class MasterControl extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <h1>Master Control</h1>
        <h2>iOS DirecTV Remote</h2>
        <div className={styles.devices}>
          <div className={styles.spacer}/>
          <img className={styles.iphone} src="../../assets/MasterControl/hero_phone.png"/>
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
