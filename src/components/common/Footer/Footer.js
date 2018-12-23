import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import LoginModalContainer from 'containers/modal/LoginModalContainer';

const cx = classNames.bind(styles);


const Footer = ({onClick}) => (
  <div className={cx('footer')} >
    <NavLink to ='/' className={cx('brand')}>GoDYL</NavLink>
    <div className = {cx('admin-login')} onClick={onClick} >로그인</div>
  </div>
);


export default Footer;