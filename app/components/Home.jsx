import React from 'react';
import styles from './Home.css'
import Navbar from './NavBar';
import ProjectPicker from './ProjectPicker'
import Projects from '../projects'
import { Collapse } from 'react-collapse'
import projects from '../projects'
import Arrow from './Arrow'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.home}>
        <Arrow className={styles.arrow}/>
        <span>Cool software. Made in Los Angeles</span>
      </div>
    );
  }
}
