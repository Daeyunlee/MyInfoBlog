import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);


const Header = () => (
  <header className={cx('header')} >
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <NavLink to='/'>GoDYL</NavLink>
      </div>
      <div className={cx('right')}>
        <Button theme="clean" to = "/editor">새 포스트</Button>
        <Button theme="menu">메뉴</Button>
      </div>
    </div>
  </header>
);


export default Header;