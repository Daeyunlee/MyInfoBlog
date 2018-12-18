import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Footer = () => (
  <div className={cx('footer')} >
    <NavLink to ='/' className={cx('brand')}>GoDYL</NavLink>
    <div className = {cx('admin-login')}>로그인</div>
  </div>
);


export default Footer;