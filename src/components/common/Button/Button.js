import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div{...rest}>{children}</div>

const Button = ({
  children, to, onClick, disabled, theme = 'default',
}) => {
  /*
    to 값이 존재하면 Link를 그렇지 않으면 div를 사용한다
    비 활성화 되어 있는 버튼 일때도 div를 사용한다.
  */
  
  const Element = ( to && !disabled ) ? NavLink : Div ;

  /*
    비 활성화 즉, disabled가 있을 때는 Div가 활성화 되며
    onClick이 실행 되지 않는다.
  */

  return (
    <Element
      to={to}
      className={cx('button', theme, {disabled})}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
}


export default Button;

/*
  활성화 옵션과 to를 받아서 NavLink 옵션을 두어
  많은 곳에서 재사용 가능한 Button 함수를 만들었다.
  disabled 옵션을 통해서 사용 가능 한 상황에만 나올 수
  있도록 했다.
*/