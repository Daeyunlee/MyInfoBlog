import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const MenuButton = ({type}) => (
  <Button theme='clean' key={type} to = {`/type/${type}/1`} >{type}</Button>
)

const Header = ({postId, onRemove, onMenu ,Mobile, postTypes, postType, width}) => {

  const MenuItems = postTypes.map(type => (
    <MenuButton 
      key = {`${type}itme`}
      type = {type}
    />
  ))
  console.log(width, Mobile);

  const Design = Mobile
    ? (
      <Button key="menu" theme="menu" onClick = {onMenu}>메뉴</Button>
    )
    : (    
      <>    
        <div className={cx('center')}>
          {MenuItems}
        </div>
        <div className={cx('right')}>
        {
          /*
            flex를 유지하기 위해 배열 형태로 렌더링한다.
          */
          postId && [
            <Button key="edit" theme="clean" to ={`/update/${postType}?id=${postId}`} >수정</Button>,
            <Button key="remove" theme="clean" onClick={onRemove}>삭제</Button>
          ]
        }
        <Button key="create" theme="clean" to={`/editor/${postType}`} >작성</Button>
        </div>
      </>
    );
    

  return (
    <header className={cx('header')} >
      <div className={cx('header-content')}>
        <div className={cx('brand')}>
          <NavLink to='/list'>GoDYL</NavLink>
        </div>
        {Design}
      </div>
    </header>
  );
};


export default Header;