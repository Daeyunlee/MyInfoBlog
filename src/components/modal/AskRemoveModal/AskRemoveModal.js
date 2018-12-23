import React from 'react';
import ModalWrapper from 'components/modal/ModalWrapper';
import styles from './AskRemoveModal.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);


const AskRemoveModal = ({visible, onCancel, onConfirm}) => (
  <ModalWrapper visible = {visible}>
    <div className={cx('question')} >
      <div className={cx('title')} >삭제</div>
      <div className={cx('description')} >삭제하시겠습니까?</div>
    </div>
    <div className={cx('options')} >
      <Button theme="outline" onClick = {onCancel}>취소</Button>
      <Button theme="outline" onClick = {onConfirm}>삭제</Button>
    </div>
  </ModalWrapper>
);


export default AskRemoveModal;