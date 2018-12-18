import React from 'react';

import styles from './ListWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/*
  여기서는 홈페이지 즉 리스트 페이지의
  내부 컴포넌트(페이지 이동 버튼, 포스트리스트)를
  감싼다.
*/

const ListWrapper = ({children}) => (
  <div className={cx('List-wrapper')}>
    {children}
  </div>
);


export default ListWrapper;