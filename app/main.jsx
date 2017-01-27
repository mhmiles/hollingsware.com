import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/App';
import ProjectsPage from './components/ProjectsPage'

render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route path="projects" component={ProjectsPage} />
  </Route>
</Router>,
  document.body.appendChild(document.createElement('div'))
);
