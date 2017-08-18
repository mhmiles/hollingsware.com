import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.css';
import SVGInline from 'react-svg-inline';
import logo from '../assets/logo.svg';
import NavButton from './NavButton'
import Logo from './Logo'
import PropTypes from 'prop-types'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavCollapsed: true
    }
  }

  render() {
    let { textColor } = this.props;

    if (textColor === undefined) {
      textColor = "black";
    }

    return (
      <div className={this.props.className}>
        <nav className={styles.navbar}>
          <div className={styles.navbarHeader}>
            <div className={styles.navbarLeft}>
              <Link className="navbar-brand" to="/">
                <Logo color={textColor}/>
              </Link>
              <div className={styles.spacer} />
              <NavButton onClick={this._toggleCollapse}/>
            </div>
            <div className={styles.spacer} />
            <div className={ this.state.isNavCollapsed ? styles.navbarCollapse : styles.navbarOpen }>
              <ul className={styles.navbarRight}>
                <li>
                  <a onClick={this.props.onProjectsClick}>Projects</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  _toggleCollapse = () => {
    this.setState({
      isNavCollapsed: !this.state.isNavCollapsed
    })
  }
}

NavBar.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string
}
