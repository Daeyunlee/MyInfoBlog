import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; //컨테이너의 필수 구독과 디스패치를 동시에 가능하도록 해준다
import {connect} from 'react-redux'; // 얘가 구독하고 디스패치 시켜주는거였다.
import * as editorActions from 'store/modules/editor';
import EditorPane from 'components/Editor/EditorPane';

class EditorContainer extends Component {

    handleChangeInput = ({name, value}) => {
        const {EditorActions} = this.props;
        EditorActions.changeInput({name, value});
    }

    render () {
        const {title, tags, markdown} = this.props;
        const {handleChangeInput} = this;

        return (
            <EditorPane 
                title = {title}
                tags = {tags}
                markdown = {markdown}
                onChangeInput={handleChangeInput}
            />
        );
    }
}

export default connect( // 구독! 디스패치! 이 모든걸 하나로!
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags')
    }),
    (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(EditorContainer);