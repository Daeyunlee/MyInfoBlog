import React, { Component } from 'react';

import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper'
import Button from 'components/common/Button';

const cx = classNames.bind(styles);


class LoginModal extends Component {
  render() {
    const {visible, onCancel, onChange, ID, onSubmit, pwdInput,idInput, result} = this.props
    return (
      <ModalWrapper visible = {visible}>
        <div className = {cx('login')}>
          <div className={cx('login-title')} >로그인</div>
          <div className = {cx('login-input')} >
            <input placeholder = "ID" name = "idInput" onChange = {onChange} value = {idInput} />
            <input type = "password" 
              placeholder = "password" onChange = {onChange} onKeyPress = {onSubmit} 
              name = "pwdInput" value={pwdInput}
            />
          </div>
          {(!result&&ID) && <div className={cx('error')} >로그인에 실패 하였습니다! 실패! 떙!</div>}
          <Button onClick = {onCancel} theme = "outline">닫기</Button> 
        </div>
      </ModalWrapper>
    );
  }
}


export default LoginModal;