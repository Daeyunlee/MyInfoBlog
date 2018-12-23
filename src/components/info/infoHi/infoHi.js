import React from 'react';

import styles from './infoHi.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const infoHi = () => (
  <div className={cx('Info-Hi')} >
    <div className = {cx('Info-Hi-Box')}>
      <div className={cx('Info-Title')}>안녕하세요. 트랜스 박스 여러분 </div>
    </div>
    <div className = {cx('Info-Hi-Box')}>
      <div className={cx('Info-Thankyou')}>바쁘신 시간 내어주셔서 감사합니다</div>
    </div>
  </div>
);


export default infoHi;