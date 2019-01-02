import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './main.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)
class Main extends Component {
  constructor() {
    super()
    this.state = {
      hasLoadData: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.updateAppInfo()
    }, 2000)
  }
  componentWillUnmount() {}

  render() {
    return <div className={cx('main-wrap')}>{this.props.test}</div>
  }
}

Main.propTypes = {}

export default Main
