import React from 'react';
import styles from './CastSync.css';
import AppFeatures from '../AppFeatures'
import AppStoreDownload from '../AppStoreDownload';
import Helmet from 'react-helmet';
import Line from '../PixelLine';
import VideoWorkaround from '../VideoWorkaround'
import { Link } from 'react-router-dom'
const appID = "1334278434";
import { Route, Switch} from 'react-router-dom'
import Faq from '../Faq'
import ScrollLink from '../ScrollLink'

const features = [
  {
    title: "Stream Sync",
    text: "Pause a stream on your Google Cast device and pick it up on your Mac",
    image: "sync.svg",
    imageColor: "#0058BF"
  },
  {
    title: "Fast and Easy",
    text: "Menu bar app for quick access",
    image: "bolt.svg",
    imageColor: "#948900"
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
    question: "How can I reopen the preferences window?",
    answer: "Right-click the CastSync menu bar item and select \"Preferences\" or reopen CastSync from Finder or Spotlight."
  }
];

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/MasterCaster/pattern.svg")}")`

export default () => {
  return (
    <div>
      <Helmet>
        <title>CastSync - Google Cast Sync for Mac</title>
        <meta name="apple-itunes-app" content={`app-id=${appID}`}/>
        <link rel="icon" href={require("../../assets/MasterCaster/favicon.ico")}/>
      </Helmet>
      <Switch>
        <Route exact path="/apps/castsync/faq/(apps)?">
          <div style={{position: "relative"}}>
            <Line style={{top: 0, position: "absolute"}} />
            <Faq faq={faq} title="CastSync" style={{color: "#333"}}/>
          </div>
        </Route>
        <Route>
          <div>
            <div className={styles.hero} style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
              <Line style={{top: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
              <h1>CastSync</h1>
              <h2>Google Cast Sync Tool</h2>
              <AppStoreDownload className={styles.download} imageClassName={styles.downloadImage} appID={appID}/>
              <div className={styles.menubar}>
                <img className={styles.end_left} src={require("../../assets/CastSync/end_left.png")}/>
                <img className={styles.slice_left} src={require("../../assets/CastSync/slice.png")}/>
                <img className={styles.menu} src={require("../../assets/CastSync/menu.png")}/>
                <img className={styles.slice_right} src={require("../../assets/CastSync/slice.png")}/>
                <img className={styles.end_right} src={require("../../assets/CastSync/end_right.png")}/>
              </div>
              <Line style={{bottom: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
            </div>
            <div className={styles.details}>
              <AppFeatures features={features} />
              <ScrollLink className={styles.faq} to="/apps/castsync/faq">Frequently Asked Questions</ScrollLink>
              <AppStoreDownload imageClassName={styles.downloadImage} appID={appID}/>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  )
}
