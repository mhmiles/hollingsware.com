import React from 'react';
import styles from './ProjectCell.css'
import { Link } from 'react-router-dom'

let assetsPath = require.context('../assets', true, /\.(png|svg)$/);

export default ({ project }) => {
  let { title, href } = project;

  return (
    <li className={styles.projectCell}>
      <ProjectLink name={title} href={href}/>
    </li>
  );
}

const ProjectLink = ({ name, href }) => {
  let imagePath = assetsPath('./'+name+'.png');
  let src_set = `${assetsPath('./'+name+'@2x.png')} 2x, ${assetsPath('./'+name+'@3x.png')} 3x`;

  return href.startsWith("/") ?
    <Link to={href} className={styles.projectLink}>
      <img className={styles.projectImage} src={imagePath} srcSet={src_set}/>
      {name}
    </Link> :
    <a href={href} className={styles.projectLink}  target="_blank">
      <img className={styles.projectImage} src={imagePath} srcSet={src_set} />
      {name}
    </a>
}
