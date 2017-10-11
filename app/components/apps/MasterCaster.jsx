import React from 'react';
import styles from './MasterCaster.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';
import AppStoreDownload from '../AppStoreDownload';
import BottomGlow from '../BottomGlow'
import Helmet from 'react-helmet';
import VideoWorkaround from '../VideoWorkaround'
import { Link } from 'react-router-dom'
const appID = "1029651642";

const features = [
  {
    title: "Cast Remote",
    text: "See what's playing. Install and launch cast-compatible apps",
    image: "ffw.svg"
  },
  {
    title: "Watch App",
    text: "Simple controls on your Apple Watch",
    image: "watch.svg"
  },
  {
    title: "Cast Extension",
    text: "Cast from popular podcast apps including Apple Podcasts, Overcast, and Castro",
    image: "podcast.svg"
  },
  {
    title: "Today Widget",
    text: "Control your casts from your lock screen",
    image: "gear.svg"
  },
  {
    title: "It's Free",
    text: "Can't beat that price",
    image: "dollar.svg"
  }
]

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/MasterCaster/pattern.svg")}")`

export default class MasterCaster extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
        <Helmet>
          <title>Master Caster - Chromecast Super Tool</title>
          <meta name="apple-itunes-app" content={`app-id=${appID}`}/>
          <link rel="icon" href={require('../../assets/mastercaster/favicon.ico')}/>
        </Helmet>
        <div className={styles.hero}>
          <h1><img src={require('../../assets/titles/mastercaster.svg')} alt="Master Caster"/></h1>
          <h2>Chromecast Super Tool</h2>
          <AppStoreDownload className={styles.download} imageClassName={styles.downloadImage} appID={appID}/>
          <div className={styles.devices}>
            <div className={styles.spacer}/>
            <div className={styles.iphone}>
              <img className={styles.iphoneImage} src={require("../../assets/MasterCaster/hero_phone.png")}/>
              <VideoWorkaround className={styles.video} src={require("../../assets/MasterCaster/mastercaster.m4v")}/>
            </div>
            <img className={styles.watch} src={require("../../assets/MasterCaster/hero_watch.png")}/>
            <AppStoreDownload className={styles.download_wide} imageClassName={styles.downloadImage} appID={appID}/>
            <div className={styles.spacer}/>
          </div>
        </div>
        <div className={styles.details}>
          <div className={featureStyles.featureContainer}>
            {features.map((feature, index) => {
              let {title, text, color, image} = feature;

              return <AppFeature key={index} text={text} title={title} color={color} imageURL={assetsPath('./'+image)}/>
            })}
          </div>
          <AppStoreDownload className={styles.end_download} imageClassName={styles.downloadImage} appID={appID}/>
          <Link className={styles.faq} to="/apps/mastercaster/faq">Frequently Asked Questions</Link>
        </div>
        <BottomGlow color="rgba(0,0,0,0.5)"/>
      </div>
    )
  }
}
