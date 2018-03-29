import React from 'react';
import styles from './MasterControl.css';
import AppFeatures from '../AppFeatures'
import AppStoreDownload from '../AppStoreDownload'
import Line from '../PixelLine';
import Helmet from 'react-helmet';
import VideoWorkaround from '../VideoWorkaround'
import { Route, Switch} from 'react-router-dom'
import Faq from '../Faq'
import ScrollLink from '../ScrollLink'

const appID = "903085287";

const features = [
  {
    title: "Built for Speed",
    text: "Fast to launch and always ready to go",
    image: "bolt.svg",
    imageColor: "#948900"
  },
  {
    title: "DVR Controls",
    text: "Who loves commercials? Get back to what matters",
    image: "ffw.svg",
    imageColor: "#0058BF"
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
    question: "Why can't I see my DirecTV box?",
    answer: "Master Control connects to your DirecTV boxes over the local network. You can verify that your box is connected by checking the network settings for a local IP address."
  },
  {
    question: "What DirecTV hardware does Master Control work with?",
    answer: "Master Control works with any network connected DirecTV receiver. This includes the H20, HR20, H21, HR21, H22, HR22, H23, HR23, H24, HR24, H25, HR25, HR34, H44, HR44, H54, C41, C41W, C51, C61 and C61K"
  }
];

let assetsPath = require.context('../../assets', true, /\.(png|svg)$/);
const backgroundImage = `url("${require("../../assets/MasterControl/pattern.svg")}")`

export default () =>  {
  return (
    <div>
      <Helmet>
        <title>Master Control - iOS DirecTV Remote Control</title>
        <meta name="apple-itunes-app" content={`app-id=${appID}`}/>
        <link rel="icon" href={require('../../assets/mastercontrol/favicon.ico')}/>
      </Helmet>
      <Switch>
        <Route exact path="/apps/mastercontrol/faq/(apps)?">
          <div style={{position: "relative"}}>
            <Line style={{top: 0, position: "absolute"}} />
            <Faq faq={faq} title="Master Control" style={{color: "#FFF"}} />
          </div>
        </Route>
        <Route>
          <div>
            <div className={styles.hero} style={{backgroundImage: backgroundImage, backgroundRepeat: "repeat"}}>
              <Line style={{top: 0, position: "absolute", backgroundColor: "rgba(255,255,255,0.15)"}} />
              <h1>Master Control</h1>
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
              <Line style={{bottom: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.15)"}} />
            </div>
            <div className={styles.details}>
              <AppFeatures features={features} />
              <ScrollLink className={styles.faq} to="/apps/mastercontrol/faq">Frequently Asked Questions</ScrollLink>
              <AppStoreDownload imageClassName={styles.downloadImage} appID={appID}/>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  )
}
