import React from 'react';
import ProjectCell from './ProjectCell'

import styles from './ProjectPicker.css'

export default class ProjectPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { projects, onProjectClick } = this.props;

    return (
      <ol className={styles.projectPicker}>
        {Object.keys(projects).map((key, index) => {
          return <ProjectCell key={index} project={projects[key]} onProjectClick={onProjectClick}/>
        })}
      </ol>
    );
  }
}
