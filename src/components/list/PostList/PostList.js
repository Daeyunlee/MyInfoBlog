import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PostList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostItem = ({id, tags}) => (
  <div className={cx('post-item')}>
    <h2><NavLink to = {`/post/${id}`} >타이틀</NavLink></h2>
    <div className={cx('date')}>2018-12-18</div>
    <p>내용</p>
    <div className={cx('tags')}>
      <NavLink to = {`/tags/${tags}`} >#태그</NavLink>
      <NavLink to = {`/tags/${tags}`} >#태그</NavLink>
      <NavLink to = {`/tags/${tags}`} >#태그</NavLink>
    </div>
  </div>
);

const PostList = () => (
  <div className={cx('post-list')}>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </div>
)

export default PostList;