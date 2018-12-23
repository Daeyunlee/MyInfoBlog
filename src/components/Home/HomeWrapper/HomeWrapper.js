import React from 'react';

import styles from './HomeWrapper.scss';
import classNames from 'classnames/bind';

import {NavLink} from 'react-router-dom';

import Search from 'components/common/Search';

const cx = classNames.bind(styles);

const HomeWrapper = ({nowTime, children}) => {
    return (
      <div className={cx('home')}>
        <div className={cx('title')}>안녕하세요!</div>
        <div className={cx('time')}>{nowTime}</div>
        <div className={cx('search')}>
          {children}
        </div>
        <div className={cx('button')}>
          <NavLink to='/list' >GoDYL</NavLink>
        </div>
      </div>
    );
}


export default HomeWrapper;