import React, { Component } from 'react';

import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class EditorTemplate extends Component {
  state = {
    leftPercentage: 0.5
  }

  /*
    separator 클릭 후 마우스를 움직이면 그에 따라
    leftPercentage 업데이트
  */
 
  handleMouseMove = (e) => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    })
  }

  handleMouseUp = (e) => {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleSeparatorMouseDown = (e) => {
    document.body.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('mouseup', this.handleMouseUp)
  }

  /*
    separator에 이벤트를 추가 하지 않은 이유는
    separator에서 벗어나는 순간 동작이 정지 되기 떄문이다.
  */
  render() {
    const { header, editor, preview} = this.props;
    const {handleSeparatorMouseDown} = this;
    const {leftPercentage} = this.state;

    const leftStyle = {
      flex: leftPercentage
    }

    const rightStyle = {
      flex: 1-leftPercentage
    }

    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    }

    return (
      <div className={cx('editor-template')}>
        {header}
        <div className={cx('panes')}>
          <div className={cx('pane', 'editor')} style = {leftStyle}>
            {editor}
          </div>
          <div className={cx('pane', 'preview')} style = {rightStyle}>
            {preview}
          </div>
          <div
            className={cx('separator')}
            style={separatorStyle}
            onMouseDown = {handleSeparatorMouseDown} />
        </div>
      </div>
    );
  }
}

export default EditorTemplate;