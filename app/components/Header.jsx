import React from 'react';
import styles from './Header.css'
import NavBar from './NavBar';
import ProjectPicker from './ProjectPicker'
import Projects from '../projects'
import { Collapse } from 'react-collapse'
import projects from '../projects'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPickerVisible: false
    }
  }

  render() {
    let { isPickerVisible, isPickerClosing } = this.state;
    let { textColor } = this.props;

    return (
      <div className={styles.fade}>
        <NavBar textColor={textColor} onProjectsClick={this._togglePickerVisibility}/>
        <Collapse
          className={styles.projectsPanel}
          isOpened={isPickerVisible}>
          <ProjectPicker onProjectClick={this._togglePickerVisibility} projects={projects}/>
        </Collapse>
      </div>
    );
  }

  _togglePickerVisibility = () => {
    let { isPickerVisible } = this.state;

    this.setState({
      isPickerVisible: !this.state.isPickerVisible
    })
  }
}

Header.propTypes = {
  textColor: PropTypes.string
}
