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
import NotFound from './components/NotFound'
import { Helmet } from 'react-helmet'

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
            <Helmet>
              <body style={
                `background-color: "#FFF";
                color: "#333";
                fill: "#333";
                border-color: "#333";`
              }
               />
            </Helmet>
            <Home/>
          </div>
        </Route>
        <Route exact path="/contact/(apps)?">
          <div>
            <Helmet>
              <body style={
                `background-color: "#AAFFCC";
                color: "rgba(0,0,0,0.3)";
                fill: "rgba(0,0,0,0.3)";
                border-color: "rgba(0,0,0,0.3)";`
              } />
            </Helmet>
            <Contact/>
          </div>
        </Route>
        <Route exact path="/support/(apps)?">
          <div>
            <Helmet>
              <body style={
                `background-color: "#AAFFCC";
                color: "rgba(0,0,0,0.3)";
                fill: "rgba(0,0,0,0.3)";
                border-color: "rgba(0,0,0,0.3)";`
              } />
            </Helmet>
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
              <Helmet>
                <body style={`background-color: ${backgroundColor};
                  color: ${textColor};
                  fill: ${textColor};`} />
              </Helmet>
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
            <Helmet>
              <body style={
                `backgroundColor: "#EEE";,
                color: "#333";
                fill: "#333";`
              } />
            </Helmet>
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
