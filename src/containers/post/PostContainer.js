import React, {Component} from 'react';
import PostInfo from 'components/post/PostInfo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from 'store/modules/post';
import PostBody from 'components/post/PostBody';

class PostContainer extends Component {

    initialize = async () => {
        const {PostActions, id, postType } = this.props;
        try {
            await PostActions.readPost(id, postType);
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render () {
        const {post, loading} = this.props;

        if(loading) return null ;
        // 로딩 중일 때는 아무것도 보여주지 않는다!

        const {title, tags, writeDate, description} = post.toJS();
        /*
            immutable의 Map 객체를 JS 객체로 변환한다.
        */

        return (
            <div>
                <PostInfo 
                    title = {title}  
                    tags = {tags}
                    date = {writeDate}
                >
                    <PostBody 
                        body = {description}
                    />
                </PostInfo>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        post : state.post.get('post'),
        loading : state.pender.pending['post/GET_POST']
        // 로딩 상태 pender를 이용해서 쉽게 로딩 중 임을 확인 할 수 있다.
    }),
    (dispatch) => ({
        PostActions : bindActionCreators(postActions, dispatch)
    })
)(PostContainer);