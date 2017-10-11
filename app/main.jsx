import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import styles from './main.css'
import Home from './components/Home'
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
import Faq from './components/Faq'

render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/">
      <div className={styles.container}>
        <BodyStyle style={{
          backgroundColor: "transparent"
        }}/>
        <NavBar textColor="#555"/>
        <Home/>
        <Footer/>
      </div>
    </Route>
    <Route exact path="/apps">
      <div className={styles.container}>
        <BodyStyle style={{
          backgroundColor: "transparent"
        }}/>
        <NavBar isNavVisible={true} textColor="#555"/>
        <Home/>
        <Footer/>
      </div>
    </Route>
    <Route path="/contact">
      <div className={styles.container}>
        <BodyStyle style={{
          backgroundColor: "#BBFFFF"
        }}/>
        <Switch>
          <Route exact path="/contact/apps" render={({location, match}) => {
            return (<NavBar textColor="rgba(0,0,0,0.3)" isNavVisible={true}/>)
          }}/>
          <Route render={({location, match}) => {
            return (<NavBar textColor="rgba(0,0,0,0.3)"/>)
          }}/>
        </Switch>
        <Contact/>
        <Footer basePath="/contact"/>
      </div>
    </Route>
    <Route path="/support">
      <div className={styles.container}>
        <BodyStyle style={{
          backgroundColor: "#77FFAA"
        }}/>
        <Switch>
          <Route exact path="/support/apps" render={({location, match}) => {
            return (<NavBar textColor="rgba(0,0,0,0.3)" isNavVisible={true}/>)
          }}/>
          <Route render={({location, match}) => {
            return (<NavBar textColor="rgba(0,0,0,0.3)"/>)
          }}/>
        </Switch>
        <Support/>
        <Footer basePath="/support"/>
      </div>
    </Route>
    <Route path="/apps/:id" render={({location, match}) => {
      let projectName = match.params.id.toLowerCase();
      let project = projects[projectName];
      let backgroundColor = 'white'

      if (project !== undefined) {
        backgroundColor = projects[projectName].backgroundColor;
      }
      let textColor = Color(backgroundColor).luminosity() > 0.3
        ? "black"
        : "white";
      let headerTextColor = Color(backgroundColor).luminosity() > 0.3
        ? "rgba(0,0,0,0.3)"
        : "rgba(255,255,255,0.5)";

      return (
        <div className={styles.container} style={{
          color: textColor
        }}>
          <BodyStyle style={{
            backgroundColor: backgroundColor
          }}/>
          <Switch>
            <Route path="/apps/:id/apps" render={({location, match}) => {
              return (<NavBar textColor={headerTextColor} isNavVisible={true}/>)
            }}/>
            <Route render={({location, match}) => {
              return (<NavBar textColor={headerTextColor}/>)
            }}/>
          </Switch>

          <Switch>
            <Route path="/apps/:id/faq" render={({location, match}) => {
              return (<Faq project={match.params.id}/>)
            }}/>
            <Route location={location} path="/apps/mastercontrol" component={MasterControl}/>
            <Route location={location} path="/apps/mastercaster" component={MasterCaster}/>
            <Route location={location} path="/apps/quicktwitch" component={QuickTwitch}/>
            <Route location={location} path="/apps/pod2watch" component={Pod2Watch}/>
            <Route location={location} component={NotFound}/>
          </Switch>
          <Footer basePath={match.params.id}/>
        </div>
      )
    }}/>
    <Route>
      <div className={styles.container}>
        <BodyStyle style={{
          backgroundColor: "transparent"
        }}/>
        <NavBar textColor="#555"/>
        <NotFound/>
        <Footer/>
      </div>
    </Route>
  </Switch>
</BrowserRouter>, document.body.appendChild(document.createElement('div')));

// const App = ({ match }) => {
//   return <Home isPickerVisible={ match.path === '/projects' } />
// }
