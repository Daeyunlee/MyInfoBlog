import React, { Component } from 'react';

import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';

import marked from 'marked';
/*
  markdown 형식의 텍스트를 html로 파싱하여 반환 해준다.
  marked(markdown텍스트, {마크다운 구성, 설정 객체})
*/

// prism 관련 코드 불러오기;

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
/*
  지원할 코드 형식을 불러온당!
  http://prismjs.com/#languages-list 참조
*/
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {

  state = {
    html: ''
  };

  renderMarkdown = () => {
    const {markdown} = this.props;
    // 마크다운이 존재하지 않느다면 공백 처리
    if(!markdown) {
      this.setState({html:''});
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true, // 일반 엔터로 새 줄 입력
        sanitize: true // 마크다운 내부 html 무시
      })
    });
  }

  constructor(props) {
    super(props);
    const { marked } = props;
    /*
      서버사이드 렌더링에서도 마크다운 처리가 되도록
      constructor 쪽에서도 구현 해준다??
    */
    this.state = {
      html: 
        marked 
        ? marked(props.markdown, {breaks:true, sanitize:true})
        : ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // markdown값이 변경되면 renderMarkdown을 호출
    if(prevProps.markdown !== this.props.markdown){
      this.renderMarkdown();
    }
  }

  render() {
    const {html} = this.state;

    /*
      React에서 html을 렌더링하려면 객체를 만들어 내부에
      __html 값을 설정해야 한다.
      그리고 원하는 Element(요소)의 attribute(속성)에
      dangerouslySetInnerHTML 값에 해당 객체를
      넣어 주면 된다! 
    */

    const markUp = {
      __html: html
    }

    return (
      <div 
        className={'markdown-render'}
        dangerouslySetInnerHTML={markUp}
      />
    );
  }
}

export default MarkdownRender;  