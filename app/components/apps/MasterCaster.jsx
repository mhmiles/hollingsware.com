import React from 'react';
import styles from './MasterCaster.css';
import AppFeatures from '../AppFeatures'
import AppStoreDownload from '../AppStoreDownload';
import Helmet from 'react-helmet';
import Line from '../PixelLine';
import VideoWorkaround from '../VideoWorkaround'
const appID = "1029651642";
import { Route, Switch} from 'react-router-dom'
import Faq from '../Faq'
import ScrollLink from '../ScrollLink'

const features = [
  {
    title: "Cast Remote",
    text: "See what's playing. Install and launch cast-compatible apps",
    image: "ffw.svg",
    imageColor: "0058BF"
  },
  {
    title: "Watch App",
    text: "Simple controls on your Apple Watch",
    image: "watch.svg",
    imageColor: "#444"
  },
  {
    title: "Share Extension",
    text: "Cast from popular podcast apps including Apple Podcasts, Overcast, and Castro",
    image: "podcast.svg",
    imageColor: "#510099"
  },
  {
    title: "Today Widget",
    text: "Control your casts from your lock screen",
    image: "gear.svg",
    imageColor: "red",
    imageColor: "orange"
  },
  {
    title: "It's Free",
    text: "Can't beat that price",
    image: "dollar.svg",
    imageColor: "#2A6F00"
  }
]

const faq = [
  {
    question: "How can I cast podcasts with Master Caster?",
    answer: "Master Caster has an action extension that adds casting support for Apple Podcasts and Overcast. Share a podcast from either app to bring up the system share sheet and launch the Master Caster extension."
  }
];

let assetsPath = require.context('../../assets', true, /\.(png|svg|ico)$/);
const backgroundImage = `url("${require("../../assets/MasterCaster/pattern.svg")}")`

export default () => {
  return (
    <div>
      <Helmet>
        <title>Master Caster - Chromecast Super Tool</title>
        <meta name="apple-itunes-app" content={`app-id=${appID}`}/>
        <link rel="icon" href={require('../../assets/mastercaster/favicon.ico')}/>
      </Helmet>
      <Switch>
        <Route exact path="/apps/mastercaster/faq/(apps)?">
          <div style={{position: "relative"}}>
            <Line style={{top: 0, position: "absolute"}} />
            <Faq faq={faq} title="Master Caster" style={{color: "#333"}}/>
          </div>
        </Route>
        <Route>
          <div>
            <div className={styles.hero} style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
              <Line style={{top: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
              <h1>Master Caster</h1>
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
              <Line style={{bottom: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
            </div>
            <div className={styles.details}>
              <AppFeatures features={features} />
              <ScrollLink className={styles.faq} to="/apps/mastercaster/faq">Frequently Asked Questions</ScrollLink>
              <AppStoreDownload imageClassName={styles.downloadImage} appID={appID}/>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  )
}
