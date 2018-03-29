import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.css';
import NavButton from './NavButton'
import Logo from './Logo'
import PropTypes from 'prop-types'
import Color from 'color';
import ProjectPicker from './ProjectPicker'
import projects from '../projects'
import Line from './PixelLine'

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
      isNavVisible: false
    }
  }

  render() {
    let { isNavVisible } = this.state

    let pathComponents = window.location.pathname.split("/").filter((val) => val);
    let isAppPanelVisible = pathComponents.slice(-1)[0] === "apps";

    let appsLinkPath = isAppPanelVisible ? ["", ...pathComponents.slice(0,-1)].join("/") : ["", ...pathComponents, "apps"].join("/")

    let collapseStyle;

    if (isAppPanelVisible) {
      collapseStyle = styles.navOpenMore
    } else {
      collapseStyle = isNavVisible ? styles.navOpen : styles.navClosed
    }

    return (
      <nav className={styles.navbar+" "+this.props.className}>
        <div className={styles.navbarHeader}>
          <div className={styles.navbarStatic}>
            <Link className={styles.logoLink} to="/">
              <Logo/>
            </Link>
            <div className={styles.wide}>
              <Link to={appsLinkPath} className={styles.navItem}>Apps</Link>
              <Link to="/contact" className={styles.navItem}>Contact</Link>
            </div>
            <NavButton onClick={this._toggleNav}/>
          </div>
          <div className={collapseStyle+" "+styles.collapseContainer}>
            <div className={styles.navCollapse}>
              <Link to={appsLinkPath} className={styles.navItem+" "+styles.thin}>
                <Line style={{opacity: 0.2}}/>
                <div className={styles.linkText}>Apps</div>
              </Link>
              <div className={ styles.appPicker + " " + (isAppPanelVisible ? styles.appPickerOpen : styles.appPickerClosed) } >
                <ProjectPicker projects={projects}/>
              </div>
              <Link to="/contact" className={styles.navItem+" "+styles.thin}>
                <Line style={{opacity: 0.2}}/>
                <div className={styles.linkText}>Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  _toggleNav = () => {
    this.setState({
      isNavVisible: !this.state.isNavVisible
    })
  }
}

NavBar.propTypes = {
  isNavVisible: PropTypes.bool
}
