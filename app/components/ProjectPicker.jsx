import React from 'react';
import ProjectCell from './ProjectCell'

import styles from './ProjectPicker.css'

export default ({ projects }) => {
  return (
    <ol className={styles.projectPicker}>
      {Object.keys(projects).map((key, index) => {
        return <ProjectCell key={index} project={projects[key]} />
      })}
    </ol>
  );
}
