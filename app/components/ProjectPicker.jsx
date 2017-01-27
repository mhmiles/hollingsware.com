import React, {PropTypes} from 'react';
import ProjectCell from './ProjectCell'

require('./ProjectPicker.css');

export default class ProjectPicker extends React.Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    let projects = this.props.projects

    return (
      <ol className="project-picker">
        {projects.map((project, index) => {
          return <ProjectCell key={index} title={project.title}/>
        })}
      </ol>
    );
  }
}
