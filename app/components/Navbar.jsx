import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">
                          <img alt="Hollingsware" src="../assets/logo.svg"/></a>

                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>

                      </div>

                      <div className="collapse navbar-collapse" id="navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right">
                              <li>
                                  <a href="/projects">Projects</a>
                              </li>
                              <li>
                                  <a href="#">About</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
    );
  }
}
