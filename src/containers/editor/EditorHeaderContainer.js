import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as editorActions from 'store/modules/editor';
import EditorHeader from 'components/Editor/EditorHeader';
import {withRouter} from 'react-router-dom'

import queryString from 'query-string';
/*
    queryString 라이브러리를 이용하면 직접 라우터에서 처리하지
    않아도 인자로 받는 URL을 파싱하여
    queryString을 쉽게 이용 할 수 있다!
*/

class EditorHeaderContainer extends Component {

    componentDidMount () {
        this.handleUpdate();
    }

    handleUpdate = async () => {
        const {EditorActions, location, type} = this.props;
        EditorActions.initialize();
        const {id} = queryString.parse(location.search);
        console.log(id);
        if(id) {
            //id가 존재하는 editor이면 포스트를 불러온다.
            await EditorActions.getPost(id, type)
            .catch((err) => {
                console.log(err);
            });
        }
    }

    handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
        /*
            이게 어느 컴포넌트에서 받아온 프로퍼티지?
            withRouter를 통해 connect함수와 리액트 라우터의
            프로퍼티를 받아 올 수 있다.
            중복 호출은 원래 안되는건가?
        */
    };

    handleSubmit = async () => {
        const {title, markdown, tags, EditorActions, history, location, type} = this.props;
        const {id} = queryString.parse(location.search);
        console.log(type);
        const post = {
            title,
            description: markdown,
            /*
                태그 텍스트를 ,로 분리 시키고 앞뒤 공백을 지운 후 
                중복 되는 값을 제거한다.
            */
            tags : tags === "" ? [] : [...new Set(
                tags.split(',').map(tag => tag.trim())
            )],
            postType: (type ? type : 'info')
        };
        /*
            여기서 궁금한건 Set은 뭐하는 애지?
            tags를 쉼표로 나누고 나눈 배열?울
            바로 map메서드를 돌려서 trim??
            메서드를 실행 시켰는데 이게 뭐지 
        */
       if(!id) {
            try {
                /*
                    Async await을 실행 시키면
                    비동기 요청이 오기 전까지
                    종료하지 않고 기다리는거지?
                */
                await EditorActions.writePost(post);
                // console.log(await api.writePost(post)) 
                /*
                    페이지를 이동 시킨다.
                    주의 해야 할 것은 비동기적으로 id값을
                    받기 때문에 id 값은 위에서 부르지 않고
                    여기서 바로 부른다.
                    현재 값을 부르기 위함이다.
                    history에 pust를 하면 이동 시킬 수 있는건가?
                */
                history.push(`/post/${this.props.postId}/${type}`)
            } catch (e) {
            console.log(e);
            }
        } else {
            console.log("I'm working");
            try {
                await EditorActions.changePost(post,id);
                history.push(`/post/${this.props.postId}/${type}`);
            } catch (e) {

            }
        }
    }

    render () {
        const {handleGoBack, handleSubmit} = this;

        return (
            <EditorHeader 
                onGoBack = {handleGoBack}            
                onSubmit = {handleSubmit}
            />
        )
    }
}

export default connect(
    (state) => ({
        title : state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags'),
        postId: state.editor.get('postId'),
    }),
    (dispatch) => ({
        EditorActions : bindActionCreators(editorActions, dispatch)
    })
)(withRouter(EditorHeaderContainer));