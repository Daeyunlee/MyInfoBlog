import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostInfo = ({children}) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <div className={cx('title')}><h1>타이틀</h1></div>
      <div className={cx('tags')}>
        <NavLink to='/'>#태그</NavLink> 
        <NavLink to='/'>#태그</NavLink>
        <NavLink to='/'>#태그</NavLink>
      </div>
      <div className={cx('date')}>Dec 18, 2018</div>
      <div className={cx('post-body')}>{children}</div>
      <div className={cx('tags')}>
        <NavLink to='/'>#태그</NavLink>
        <NavLink to='/'>#태그</NavLink>
        <NavLink to='/'>#태그</NavLink>
      </div>
    </div>
  </div>
);


export default PostInfo;