import React, { Component } from 'react';

import styles from './HomeTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class HomeTemplate extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className = {cx('homeGround')}>
        {children}
      </div>
    );
  }
}


export default HomeTemplate;