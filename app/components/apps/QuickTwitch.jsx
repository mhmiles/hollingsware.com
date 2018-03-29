import React from 'react';
import styles from './QuickTwitch.css';
import AppFeatures from '../AppFeatures'
import Line from '../PixelLine';
import Helmet from 'react-helmet';
import { Route, Switch} from 'react-router-dom'
import Faq from '../Faq'
import ScrollLink from '../ScrollLink'
import FA from 'react-fontawesome'

const features = [
  {
    title: "Ultra Fast",
    text: "Fast to open and always ready to go",
    image: "bolt.svg",
    imageColor: "#948900"
  },
  {
    title: "Ultra Minimal",
    text: "See who's live and launch streams",
    image: "circle.svg",
    imageColor: "#444"
  },
  {
    title: "Extra Efficient",
    text: "Up to 25% less CPU hungry than a browser",
    image: "battery.svg",
    imageColor: "#2A6F00"
  },
  {
    title: "Ad Free",
    text: "Raw video stream with no ads injected",
    image: "block.svg",
    imageColor: "#A00"
  },
  {
    title: "Open Source",
    text: "View the code or contribute",
    url: "https://github.com/mhmiles/quicktwitch",
    image: "github.svg",
    imageColor: "#111"
  }
]

const faq = [
  {
    question: "Why does nothing happen when I click a stream?",
    answer: "Twitch requires you to be logged in to retreive raw video stream links. Authenticate with Twitch by clicking the button in the top right of the window."
  },
  {
    question: "I'm logged in and streams still won't open. What gives?",
    answer: "QuickTwitch depends on livestreamer and VLC for playing Twitch streams. Please make sure you have both installed."
  }
];

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/QuickTwitch/pattern.svg")}")`;

export default () => {
  return (
    <div>
      <Helmet>
        <title>QuickTwitch - Cross Platform Twitch.tv Client</title>
        <link rel="icon" href={require("../../assets/quicktwitch/favicon.ico")}/>
      </Helmet>
      <Switch>
        <Route exact path="/apps/quicktwitch/faq/(apps)?">
          <div style={{position: "relative"}}>
            <Line style={{top: 0, position: "absolute"}} />
            <Faq faq={faq} title="QuickTwitch" style={{color: "#FFF"}} />
          </div>
        </Route>
        <Route>
          <div>
            <div className={styles.hero} style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
              <Line style={{top: 0, position: "absolute", backgroundColor: "rgba(255,255,255,0.15)"}} />
              <h1>QuickTwitch</h1>
              <h2>Cross Platform Twitch.tv Client</h2>
              <div className={styles.downloads}>
                <a href="https://github.com/mhmiles/QuickTwitch/releases/download/0.9.0/QuickTwitch-0.9.0.dmg"><FA name="apple"/></a>
                <a href="https://github.com/mhmiles/QuickTwitch/releases/download/0.9.0/QuickTwitch.Setup.0.9.0.exe"><FA name="windows"/></a>
                <a href="https://github.com/mhmiles/QuickTwitch/releases/download/0.9.0/QuickTwitch-0.9.0-x86_64.AppImage"><FA name="linux"/></a>
              </div>
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
              <AppFeatures features={features} />
              <ScrollLink className={styles.faq} to="/apps/quicktwitch/faq">Frequently Asked Questions</ScrollLink>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  )
}
