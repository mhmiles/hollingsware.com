import React from 'react';

require('./App.css');
import Navbar from './Navbar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}
