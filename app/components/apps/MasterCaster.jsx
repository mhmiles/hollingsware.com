import React from 'react';
import styles from './MasterCaster.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';

const features = [
  {
    title: "Cast Extension",
    text: "Start casts from many popular podcast apps including Apple Podcasts, Overcast, and Castro.",
    color: "#CC93E4",
    image: "podcast.svg"
  },
  {
    title: "Cast Remote",
    text: "See what's playing. Install and launch cast compatible apps.",
    color: "#81BEFF",
    image: "ffw.svg"
  },
  {
    title: "Today Widget",
    text: "Control your cast from your lock screen.",
    color: "#4CD967",
    image: "gear.svg"
  },
  {
    title: "Watch App",
    text: "Simple controls on your Apple Watch.",
    color: "#4CD967",
    image: "watch.svg"
  },
  {
    title: "It's Free",
    text: "Can't beat that price!",
    color: "#FFE051",
    image: "dollar.svg"
  }
]

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);

export default class MasterCaster extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <h1>Master Caster</h1>
        <h2>iOS + Chromecast Super Tool</h2>
        <a className={styles.download} href="https://itunes.apple.com/app/apple-store/id903085287?pt=223150&ct=Hollingsware&mt=8">
          <img className={styles.downloadImage} src="../../assets/download.svg"/>
        </a>
        <div className={styles.devices}>
          <div className={styles.spacer}/>
          <img className={styles.iphone} src={require("../../assets/MasterCaster/hero_phone.png")}/>
          <img className={styles.watch} src={require("../../assets/MasterCaster/hero_watch.png")}/>
          <a className={styles.download_wide} href="https://itunes.apple.com/app/apple-store/id903085287?pt=223150&ct=Hollingsware&mt=8">
            <img className={styles.downloadImage} src={require("../../assets/download.svg")}/>
          </a>
          <div className={styles.spacer}/>
        </div>
        <div className={styles.details}>
          <div className={featureStyles.featureContainer}>
            {features.map((feature, index) => {
              let {title, text, color, image} = feature;

              return <AppFeature key={index} text={text} title={title} color={color} imageURL={assetsPath('./'+image)}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}
