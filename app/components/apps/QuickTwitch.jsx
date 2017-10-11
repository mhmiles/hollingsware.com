import React from 'react';
import styles from './QuickTwitch.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';
import BottomGlow from '../BottomGlow'
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'

const features = [
  {
    title: "Ultra Fast",
    text: "Fast to open and always ready to go",
    image: "bolt.svg"
  },
  {
    title: "Ultra Minimal",
    text: "See who's live and launch streams",
    image: "circle.svg"
  },
  {
    title: "Extra Efficient",
    text: "Up to 25% less CPU hungry than a browser",
    image: "battery.svg"
  },
  {
    title: "Ad Free",
    text: "Raw video stream with no ads injected",
    image: "block.svg"
  },
  {
    title: "Open Source",
    text: "View the code or contribute",
    url: "https://github.com/mhmiles/quicktwitch",
    image: "github.svg"
  }
]

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/QuickTwitch/pattern.svg")}")`;

export default class QuickTwitch extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
        <Helmet>
          <title>QuickTwitch - Cross Platform Twitch.tv Client</title>
          <link rel="icon" href={require("../../assets/quicktwitch/favicon.ico")}/>
        </Helmet>
        <div className={styles.hero}>
          <h1><img src={require('../../assets/titles/quicktwitch.svg')} alt="Quick Twitch"/></h1>
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
        </div>
        <div className={styles.details}>
          <div className={featureStyles.featureContainer}>
            {features.map((feature, index) => {
              let {title, text, color, image, url} = feature;

              return <AppFeature key={index} text={text} title={title} color={color} imageURL={assetsPath('./'+image)} url={url}/>
            })}
          </div>
          <Link className={styles.faq} to="/apps/quicktwitch/faq">Frequently Asked Questions</Link>
        </div>
        <BottomGlow color="rgba(0,0,0,0.5)"/>
      </div>
    )
  }
}
