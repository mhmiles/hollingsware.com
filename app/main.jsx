import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import styles from './main.css'
import Home from './components/Home'
import CastSync from './components/apps/CastSync'
import MasterControl from './components/apps/MasterControl'
import MasterCaster from './components/apps/MasterCaster'
import QuickTwitch from './components/apps/QuickTwitch'
import Pod2Watch from './components/apps/Pod2Watch'
import projects from './projects'
import Footer from './components/Footer'
import Color from 'color';
import Contact from './components/Contact'
import Support from './components/Support'
import NavBar from './components/NavBar'
import BodyStyle from 'body-style'
import NotFound from './components/NotFound'

let appNames = [
  "castsync",
  "mastercontrol",
  "mastercaster",
  "quicktwitch",
  "pod2watch",
];

render(
  <BrowserRouter>
  <Route>
    <div className={styles.container}>
      <NavBar/>
      <Switch>
        <Route exact path="/(apps)?">
          <div>
            <BodyStyle style={{
              backgroundColor: "#FFF",
              color: "#333",
              fill: "#333",
              borderColor: "#333"
            }}/>
            <Home/>
          </div>
        </Route>
        <Route exact path="/contact/(apps)?">
          <div>
            <BodyStyle style={{
              backgroundColor: "#DDF4FD",
              color: "rgba(0,0,0,0.3)",
              fill: "rgba(0,0,0,0.3)",
              borderColor: "rgba(0,0,0,0.3)"
            }}/>
            <Contact/>
          </div>
        </Route>
        <Route exact path="/support/(apps)?">
          <div>
            <BodyStyle style={{
              backgroundColor: "#AAFFCC",
              color: "rgba(0,0,0,0.3)",
              fill: "rgba(0,0,0,0.3)",
              borderColor: "rgba(0,0,0,0.3)"
            }}/>
            <Support/>
          </div>
        </Route>
        <Route exact path={`/apps/:id(${appNames.join("|")})/(apps|faq)?/(apps)?`} render={({ match }) => {
          let projectName = match.params.id.toLowerCase();
          let project = projects[projectName];
          let backgroundColor = "#EEE";

          if (project !== undefined) {
            backgroundColor = projects[projectName].backgroundColor;
          }

          let isBackgroundBright = Color(backgroundColor).luminosity() > 0.3;
          let textColor = isBackgroundBright
            ? "rgba(0,0,0,0.5)"
            : "rgba(255,255,255,0.5)";

          return (
            <div>
              <BodyStyle style={{
                backgroundColor: backgroundColor,
                color: textColor,
                fill: textColor
              }}/>
              <Switch>
                <Route path="/apps/castsync" component={CastSync}/>
                <Route path="/apps/mastercontrol" component={MasterControl}/>
                <Route path="/apps/mastercaster" component={MasterCaster}/>
                <Route path="/apps/quicktwitch" component={QuickTwitch}/>
                <Route path="/apps/pod2watch" component={Pod2Watch}/>
              </Switch>
            </div>
          )
        }}/>
        <Route>
          <div>
            <BodyStyle style={{
              backgroundColor: "#EEE",
              color: "#333",
              fill: "#333"
            }}/>
            <NotFound/>
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/(apps)?">
          <Footer style={{color: "rgba(0,0,0,0.3)"}}/>
        </Route>
        <Route>
          <Footer/>
        </Route>
      </Switch>
    </div>
  </Route>
</BrowserRouter>
  , document.body.appendChild(document.createElement('div')));

// const App = ({ match }) => {
//   return <Home isPickerVisible={ match.path === '/projects' } />
// }
