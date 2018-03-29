import React from 'react';
import styles from './Pod2Watch.css';
import AppFeatures from '../AppFeatures'
import AppStoreDownload from '../AppStoreDownload';
import Line from '../PixelLine';
import Helmet from 'react-helmet';
import VideoWorkaround from '../VideoWorkaround'
import { Route, Switch} from 'react-router-dom'
import Faq from '../Faq'
import ScrollLink from '../ScrollLink'

const appID = "1223275627";

const features = [
  {
    title: "Watch App",
    text: "Send podcasts to your watch and leave your phone behind",
    image: "watch.svg",
    imageColor: "#510099"
  },
  {
    title: "No Setup",
    text: "Shares a media library with the Apple Podcasts app",
    image: "gear.svg",
    imageColor: "#444"
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
    question: "Why can't I find my podcasts in Pod2Watch?",
    answer: "Pod2Watch shares the same media library as the Apple Podcasts app. Download the missing podcast in Apple Podcasts and it will be visible to Pod2Watch."
  },
  {
    question: "How long does it take to send a podcast to my Apple Watch?",
    answer: "The answer can depend on a number of factors.  In my experience, it can take anywhere between 15 and 30 minutes to send an hour long podcast."
  },
  {
    question: "Why are podcast transfers so slow?",
    answer: "As a developer you have very little control over the iPhone/Apple Watch transfer process. iOS uses a combination of Bluetooth and Wi-Fi to optimize for battery life. Charging your Apple Watch may speed up a transfer."
  },
  {
    question: "Why is progress of transfers not visible?",
    answer: "iOS does not make this transfer progress percentage available to a program.  iOS will only notify a program once a transfer is complete."
  }
];

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/Pod2Watch/pattern.svg")}")`

export default () => {
  return (
    <div>
      <Helmet>
        <title>Pod2Watch - Apple Watch Podcast Player</title>
        <meta name="apple-itunes-app" content={`app-id=${appID}`}/>
        <link rel="icon" href={require("../../assets/Pod2Watch/favicon.ico")}/>
      </Helmet>
      <Switch>
        <Route exact path="/apps/pod2watch/faq/(apps)?">
          <div style={{position: "relative"}}>
            <Line style={{top: 0, position: "absolute"}} />
            <Faq faq={faq} title="Pod2Watch" style={{color: "#FFF"}} />
          </div>
        </Route>
        <Route>
          <div>
            <div className={styles.hero} style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
              <Line style={{top: 0, position: "absolute", backgroundColor: "rgba(255,255,255,0.15)"}} />
              <h1>Pod2Watch</h1>
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
              <Line style={{bottom: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
            </div>
            <div className={styles.details}>
              <AppFeatures features={features} />
              <ScrollLink className={styles.faq} to="/apps/pod2watch/faq">Frequently Asked Questions</ScrollLink>
              <AppStoreDownload imageClassName={styles.downloadImage} appID={appID}/>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  )
}
