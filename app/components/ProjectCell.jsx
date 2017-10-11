import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCell.css'
import { Link } from 'react-router-dom'
import _ from 'lodash'

let assetsPath = require.context('../assets', true, /\.(png|svg)$/);

export default class ProjectCell extends React.Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    let { onProjectClick } = this.props
    let { title, href, image } = this.props.project

    return (
      <li className={styles.projectCell}>
        <ProjectLink name={title} href={href} image={image} onClick={onProjectClick}/>
      </li>
    );
  }
}

const ProjectLink = ({name, href, image, onClick}) => {
  return href.startsWith("/") ?
    <Link to={href} className={styles.projectLink} onClick={onClick}>
      <img className={styles.projectImage} src={assetsPath('./'+image)} />
      {name}
    </Link> :
    <a href={href} className={styles.projectLink}  target="_blank" onClick={onClick}>
      <img className={styles.projectImage} src={assetsPath('./'+image)} />
      {name}
    </a>
}
