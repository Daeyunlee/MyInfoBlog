import React, { Component } from 'react';

import styles from './ModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class ModalWrapper extends Component {
  state = {
    animate : false
  }

  startAnimation = () => {
    // animation 값은 true로 설정
    this.setState({
      animate: true
    });
    setTimeout(() => {
      this.setState({
        animate: false
      })
    }, 250);
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.visible !== this.props.visible) {
      this.startAnimation();
      /*
        버튼이 눌리면 변경되는 상태 값을 이용했다
        좋은 생각이다.
        상태를 다양하게 활용하는게 좋은 생각인거 같다.
      */
    }
  }

  render() {
    const {children, visible} = this.props;
    const {animate} = this.state;

    if(!visible && !animate) return null;

    const animation = animate && (visible ? 'enter' : 'leave')
    /*
      이것도 훌룡한 예시다 animate가 true이고 visible이 true인 상태는
      이제 모달이 올라가야 하는 상황이고 leave는 내려가는 상황
      와 이걸 이렇게 한 줄로 표현 했네
    */

    if(!visible) return null;
    return (
      <div>
        <div className={cx('gray-background', animation)} />
        <div className={cx('modal-wrapper')}>
          <div className={cx('modal', animation)}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}


export default ModalWrapper;