import React, {PropTypes} from 'react';

require('./ProjectCell.css');

export default class ProjectCell extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {title, image} = this.props

    return (
      <li className="project-cell">
        <img className="project-image" src={"../assets/"+title+".png"} />
        {title}
      </li>
    );
  }
}
