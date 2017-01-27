import React from 'react';

require('./ProjectsPage.css');

import ProjectPicker from './ProjectPicker'
import Projects from '../projects'

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProjectPicker projects={Projects}/>
        {this.props.children}
      </div>
    );
  }
}
