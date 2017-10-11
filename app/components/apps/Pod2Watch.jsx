import React from 'react';
import styles from './Pod2Watch.css';
import AppFeature from '../AppFeature';
import featureStyles from '../AppFeature.css';
import AppStoreDownload from '../AppStoreDownload';
import BottomGlow from '../BottomGlow'
import Helmet from 'react-helmet';
import VideoWorkaround from '../VideoWorkaround'
import { Link } from 'react-router-dom'

const appID = "1223275627";

const features = [
  {
    title: "Listen On The Go",
    text: "Send podcasts to your watch and leave your phone behind",
    image: "runner.svg"
  },
  {
    title: "No Setup Required",
    text: "Shares a media library with the Apple Podcasts app",
    image: "podcast.svg"
  },
  {
    title: "It's Free",
    text: "Can't beat that price",
    image: "dollar.svg"
  }
]

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/Pod2Watch/pattern.svg")}")`

export default class Pod2Watch extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
        <Helmet>
          <title>Pod2Watch - Apple Watch Podcast Player</title>
          <meta name="apple-itunes-app" content={`app-id=${appID}`}/>
          <link rel="icon" href={require("../../assets/Pod2Watch/favicon.ico")}/>
        </Helmet>
        <div className={styles.hero}>
          <h1><img src={require('../../assets/titles/pod2watch.svg')} alt="Pod2Watch"/></h1>
          <h2>Apple Watch Podcast Player</h2>
          <AppStoreDownload className={styles.download} imageClassName={styles.downloadImage} appID={appID}/>
          <div className={styles.devices}>
            <div className={styles.spacer}/>
            <div className={styles.iphone}>
              <img className={styles.iphoneImage} src={require("../../assets/Pod2Watch/hero_iphone.png")}/>
              <VideoWorkaround className={styles.video} src={require("../../assets/Pod2Watch/pod2watch.m4v")}/>
            </div>
            <img className={styles.watch} src={require("../../assets/Pod2Watch/hero_watch.png")}/>
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
          <Link className={styles.faq} to="/apps/pod2watch/faq">Frequently Asked Questions</Link>
        </div>
        <BottomGlow color="rgba(0,0,0,0.5)"/>
      </div>
    )
  }
}
