import React from 'react';
import Button from 'components/common/Button';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';

import {NavLink} from 'react-router-dom';

const cx = classNames.bind(styles);

const EditorHeader = ({onPreview, onGoBack, onSubmit}) => (
  <div className={cx('editor-header')}>
    <div className={cx('back')}>
      <Button onClick={onGoBack} theme="pinger">뒤로가기</Button>
    </div>
    <div className={cx('brand')}>
      <NavLink to ='/'>GoDYL</NavLink>
    </div>
    <div className={cx('preview')}>
      <Button onClick={onPreview} theme='pinger'>미리보기</Button>
    </div>
    <div className={cx('submit')}>
      <Button onClick={onSubmit} theme="pinger">작성하기</Button>
    </div>
  </div>
);

export default EditorHeader;