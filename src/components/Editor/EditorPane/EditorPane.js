import React, {Component} from 'react';

import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
// 마크 다운 문법 색생, 마크다운 내부에 들어가는 코드 색상

import 'codemirror/mode/javascript/javascriprt';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// ComdeMirror을 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);


class EditorPane extends Component {

  editor = null // 에디터

  render () {

    return (
      <div className={cx('editor-pane')}>
        <input 
          className={cx('title')} 
          placeholder="제목을 입력하세요" 
        />
        <div className = {cx('code-editor')}></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)" />
        </div>
      </div>
    );
  }
};


export default EditorPane;