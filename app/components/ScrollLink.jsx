import React from 'react';
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll'

export default class ScrollLink extends React.Component {
  render() {
    return <Link onClick={Scroll.animateScroll.scrollToTop({smooth: "easeInOutQuad", duration: 500})} {...this.props}/>
  }
}
