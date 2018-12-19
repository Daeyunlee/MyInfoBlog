import React, {Component} from 'react';

import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
// 마크 다운 문법 색생, 마크다운 내부에 들어가는 코드 색상

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// ComdeMirror을 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);


class EditorPane extends Component {

  editor = null; // 에디터 ref
  codeMirror= null; // codeMirror instance
  cursor = null; // 에디터의 텍스트 커서 위치

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 왼쪽에 라인 넘버 띄우기
      lineWrapping: true // 내용이 너무 길면 다음 줄에 작성
    });
    this.codeMirror.on('change', this.handleChangeMarkdown);
    /*
      구독 같은건가? 아 이벤트 리스너 같은 거다!
      codeMirror에 값이 변경되면 'change'가 되면
      2번째 매개변수에다 doc이라는 인자를 넘겨주고
      해당 인자에는 여러가지 정보가 담겨 있다.
    */
  };

  // 마운트 되면 markdown 호출
  componentDidMount() {
    console.log("componentDidMount!")
    this.initializeEditor();
    /*
      근데 왜 마운트가 되고 난 후에 코드미러를
      활성화 시키는거지?
    */
  };

  handleChange = (e) => {
    const {onChangeInput} = this.props;
    const {name, value} = e.target;
    onChangeInput({name, value});
    /*
      값이 바뀔 때마다 부모 객체에서 준 액션 생성 함수로
      스토어로 디스패치를 한다.
      이를 통해 previewPane에서도 즉시 데이터를 확인 할 수 있다.
    */
  }

  handleChangeMarkdown = (doc) => {
    const {onChangeInput} = this.props;
    this.cursor = doc.getCursor();
    /*
      여기는 마크다운 에디터가 변경되면 스토어에
      디스패치 및 커서의 위치를 받아와서
      저장하고 그걸 이용한다.
    */
    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    })
  }

  componentDidUpdate(prevProps, prevState) {
    /*
      markdown이 변경되면 에디터 값도 변경
      이 과정에서 커서의 위치가 변경
      저장한 커서의 위치가 있으면 해당 위치로 설정
    */
    if(prevProps.markdown !== this.props.markdown){
      const {codeMirror, cursor} = this;
      if(!codeMirror) {
        console.log('there is not instance');
        return;
      } 
      /*
        인스턴스를 아직 만들지 않았을 떄
        아니 Didmount가 되면 바로 생성 되는데
        왜 인스턴스가 생성되지 않을 상황이 있는거지?
        음 상태 값을 업데이트 하는 것보다
        마운트를 하는게 더 늦는건가?
        아닌데 순서 상으로는 마운트가 더 먼저 아닌가?
        콘솔로 찍어봤을때 차이가 나는지 확인 해보자
        DidUpdate는 값이 변경 된 후에 호출 되는 메서드이다.
      */
      codeMirror.setValue(this.props.markdown);
      if(!cursor) return ;
      /*
        커서가 없을 때
      */
      codeMirror.setCursor(cursor);
    }
  }
  
  render () {
    const {handleChange} = this;
    const {title, tags} = this.props;

    return (
      <div className={cx('editor-pane')}>
        <input 
          className={cx('title')} 
          placeholder="제목을 입력하세요" 
          name="title"
          value={title}
          onChange={handleChange}
        />
        <div 
          className = {cx('code-editor')}
          ref={ref => this.editor = ref}
        ></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input 
            name="tags" 
            placeholder="태그를 입력하세요 (쉼표로 구분)" 
            value={tags}
            onChange={handleChange}  
          />
        </div>
      </div>
    );
  }
};


export default EditorPane;