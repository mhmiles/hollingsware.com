import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styles from './main.css'
import Header from './components/Header'
import Home from './components/Home'
import MasterControl from './components/apps/MasterControl'
import MasterCaster from './components/apps/MasterCaster'
import QuickTwitch from './components/apps/QuickTwitch'
import Pod2Watch from './components/apps/Pod2Watch'
import projects from './projects'
import Footer from './components/Footer'
import Color from 'color';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <div style={{backgroundColor: "transparent", transition: "background-color 1s ease-in-out", display: "flex", flexDirection: "column", color: "black"}}>
          <Header/>
          <Home/>
          <Footer/>
        </div>
      </Route>
      <Route path="/projects/:id" render={({ location, match }) => {
        let projectName = match.params.id.toLowerCase();
        let backgroundColor = projects[projectName].backgroundColor;

        let textcolor = Color(backgroundColor).luminosity() > 0.3 ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.5)";
        let colorStyle = {
          backgroundColor: backgroundColor,
          transition: "background-color 1s ease-in-out",
          display: "flex",
          flexDirection: "column",
          color: textcolor
        }

        return (
          <div style={colorStyle}>
            <Header textColor={textcolor} activeProject={match.params.id.toLowerCase()}/>
            <Route location={location} path="/projects/mastercontrol" component={MasterControl} />
            <Route location={location} path="/projects/mastercaster" component={MasterCaster} />
            <Route location={location} path="/projects/quicktwitch" component={QuickTwitch} />
            <Route location={location} path="/projects/pod2watch" component={Pod2Watch} />
            <Footer/>
          </div>
        )
      }}/>
    </Switch>
  </BrowserRouter>,
  document.body.appendChild(document.createElement('div'))
);

// const App = ({ match }) => {
//   return <Home isPickerVisible={ match.path === '/projects' } />
// }
