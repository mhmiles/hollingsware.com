import React from 'react';
import styles from './QuickTwitch.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';

const features = [
  {
    title: "Ultra Fast",
    text: "Fast to launch and always ready to go.",
    color: "#FA810D",
    image: "bolt.svg"
  },
  {
    title: "Ultra Minimal",
    text: "See who's on and launch their stream. That's it.",
    color: "#DDD",
    image: "circle.svg"
  },
  {
    title: "Ultra Efficient",
    text: "Uses up to 25% less power than a browser.",
    color: "#4CD967",
    image: "battery.svg"
  },
  {
    title: "Ad Free",
    text: "Raw video stream with no ads injected.",
    color: "#FFE051",
    image: "block.svg"
  },
  {
    title: "Open Source",
    text: "Check it out",
    url: "https://github.com/mhmiles/quicktwitch",
    color: "#8FB8ED",
    image: "github.svg"
  }
]

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);

export default class QuickTwitch extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <h1>QuickTwitch</h1>
        <h2>Cross Platform Twitch.tv Client</h2>
        <div className={styles.devices}>
          <div className={styles.spacer}/>
          <div className={styles.app}>
            <img src={require("../../assets/QuickTwitch/QuickTwitch.png")}/>
          </div>
          <div className={styles.vlc}>
            <img src={require("../../assets/QuickTwitch/vlc.png")}/>
          </div>
          <div className={styles.spacer}/>
        </div>
        <div className={styles.details}>
          <div className={featureStyles.featureContainer}>
            {features.map((feature, index) => {
              let {title, text, color, image, url} = feature;

              return <AppFeature key={index} text={text} title={title} color={color} imageURL={assetsPath('./'+image)} url={url}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}
