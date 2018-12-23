import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PostList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostItem = ({postNum, tags, writeDate, title, postType}) => {
  const tagsLink = tags.map(tag => (
    <NavLink to={`/tag/${tag}/1`}key={tag}>#{tag}</NavLink>
  ));
  return (
    <div className={cx('post-item')}>
      <h2><NavLink to = {`/post/${postNum}/${postType}`} >{title}</NavLink></h2>
      <div className={cx('date')}>{writeDate}</div>
      <div className={cx('tags')}>
        {tagsLink}
      </div>
    </div>
  );
}

const PostList = ({pageList}) => {
  const ItemList = pageList.map(page => {
    const {title, postNum, writeDate, tags, postType} = page;
    return (
      <PostItem 
        tags = {tags}
        title = {title}
        postNum = {postNum}
        writeDate = {writeDate}
        key = {postNum}
        postType = {postType}
      />
    )
  })

  return (
    <div className={cx('post-list')}>
      {ItemList}
    </div>
  )
}

export default PostList;