import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostInfo = ({children, title, tags, date}) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <div className={cx('title')}><h1>{title}</h1></div>
      <div className={cx('tags')}>
        {
          /* tags가 있을때만! 태그를 반환하도록
           and 연산자를 이용해서 간단하게 표현했다.*/
          tags && tags.map(
            tag => <NavLink 
                      key={tag} 
                      to ={`/tag/${tag}`} 
                    >#{tag}</NavLink>
          )
        }
      </div>
      <div className={cx('date')}>{date}</div>
      <div className={cx('post-body')}>{children}</div>
      <div className={cx('tags')}>
        {
          tags && tags.map(
            tag => <NavLink 
                      key={tag} 
                      to ={`/tag/${tag}`} 
                    >#{tag}</NavLink>
          )
        }
      </div>
    </div>
  </div>
);


export default PostInfo;