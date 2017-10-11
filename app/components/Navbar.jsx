import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.css';
import SVGInline from 'react-svg-inline';
import logo from '../assets/logo.svg';
import NavButton from './NavButton'
import Logo from './Logo'
import PropTypes from 'prop-types'
import Color from 'color';
import { Collapse } from 'react-collapse'
import ProjectPicker from './ProjectPicker'
import projects from '../projects'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this._updateNavVisibility(props);
  }

  componentWillReceiveProps(nextProps) {
    this._updateNavVisibility(nextProps)
  }

  _updateNavVisibility = (props) => {
    this.state = {
      isPickerVisible: props.isNavVisible || false,
      isNavVisible: props.isNavVisible || false
    }
  }

  render() {
    let { textColor, backgroundColor } = this.props;

    if (textColor === undefined) {
      textColor = "black";
    }

    let { isPickerVisible, isNavVisible } = this.state

    let collapseStyle;

    if (isPickerVisible && isNavVisible) {

      collapseStyle = styles.navOpenMore
    } else {
      collapseStyle = isNavVisible ? styles.navOpen : styles.navClosed
    }

    const borderColor = Color(textColor).fade(0.3).string()
    const fadedBorderStyle = {borderColor: Color(textColor).fade(0.5).string()}
    const barColor = Color(textColor).opaquer(0.8).string()

    return (
      <nav className={styles.navbar+" "+this.props.className} style={{color: textColor, borderColor: borderColor}}>
        <div className={styles.navbarHeader}>
          <div className={styles.navbarStatic}>
            <Link className={styles.logoLink} to="/">
              <Logo color={textColor}/>
            </Link>
            <div className={styles.wide}>
              <a className={styles.navItem} onClick={this._toggleAppPicker}>Apps</a>
              <Link to="/contact" className={styles.navItem}>Contact</Link>
            </div>
            <NavButton className={styles.navButton} borderColor={borderColor} onClick={this._toggleNav}/>
          </div>
          <div className={collapseStyle+" "+styles.collapseContainer}>
            <div className={styles.navCollapse}>
              <a className={styles.navItem+" "+styles.thin} onClick={this._toggleAppPicker} style={fadedBorderStyle}>Apps</a>
              <div className={`${isPickerVisible ? styles.appPickerOpen : styles.appPickerClosed} ${styles.appPickerCollapse}`}>
                <ProjectPicker height="140px" onProjectClick={this._toggleAppPicker} projects={projects}/>
              </div>
              <Link to="/contact" className={styles.navItem+" "+styles.thin} style={fadedBorderStyle}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  _toggleNav = () => {
    this.setState({
      isNavVisible: !this.state.isNavVisible
    })
  }

  _toggleAppPicker = () => {
    this.setState({
      isPickerVisible: !this.state.isPickerVisible
    })
  }
}

NavBar.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  isNavVisible: PropTypes.bool
}
