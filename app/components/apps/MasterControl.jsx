import React from 'react';
import styles from './MasterControl.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';
import AppStoreDownload from '../AppStoreDownload';
import BottomGlow from '../BottomGlow'
import Helmet from 'react-helmet';
import VideoWorkaround from '../VideoWorkaround'
import { Link } from 'react-router-dom'

const appID = "903085287";

const features = [
  {
    title: "Built for Speed",
    text: "Fast to launch and always ready to go",
    image: "bolt.svg"
  },
  {
    title: "DVR Controls",
    text: "Who loves commercials? Get back to what matters",
    image: "ffw.svg"
  },
  {
    title: "It's Free",
    text: "Can't beat that price",
    image: "dollar.svg"
  }
]

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/MasterControl/pattern.svg")}")`

export default class MasterControl extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
        <Helmet>
          <title>Master Control - iOS DirecTV Remote Control</title>
          <meta name="apple-itunes-app" content={`app-id=${appID}`}/>
          <link rel="icon" href={require('../../assets/mastercontrol/favicon.ico')}/>
        </Helmet>
        <div className={styles.hero}>
          <h1><img src={require('../../assets/titles/mastercontrol.svg')} alt="Master Control"/></h1>
          <h2>DirecTV Remote Control</h2>
          <AppStoreDownload className={styles.download} imageClassName={styles.downloadImage} appID={appID}/>
          <div className={styles.devices}>
            <div className={styles.spacer}/>
            <div className={styles.iphone}>
              <img className={styles.iphoneImage} src={require("../../assets/MasterControl/hero_phone.png")}/>
              <VideoWorkaround className={styles.video} src={require("../../assets/MasterControl/mastercontrol.m4v")}/>
            </div>
            <AppStoreDownload className={styles.download_wide} imageClassName={styles.downloadImage} appID={appID}/>
            <div className={styles.spacer}/>
          </div>
          <BottomGlow color="rgba(0,0,0,0.1)"/>
        </div>
        <div className={styles.details}>
          <div className={featureStyles.featureContainer}>
            {features.map((feature, index) => {
              let {title, text, color, image} = feature;

              return <AppFeature key={index} text={text} title={title} color={color} imageURL={assetsPath('./'+image)}/>
            })}
          </div>
          <AppStoreDownload className={styles.end_download} imageClassName={styles.downloadImage} appID={appID}/>
          <Link className={styles.faq} to="/apps/mastercontrol/faq">Frequently Asked Questions</Link>
        </div>
        <BottomGlow color="rgba(0,0,0,0.5)"/>
      </div>
    )
  }
}
