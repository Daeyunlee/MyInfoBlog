import React from 'react';

import PageTemplate from 'components/common/PageTemplate';
import PostContainer from 'containers/post/PostContainer';
import MenuBarContainer from 'containers/menu/MenuBarContainer';
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer';
import LoginModalContainer from 'containers/modal/LoginModalContainer';

/*
    라우트 처리가 되어 이동하게 될 컴포넌트이다.
    필요한 구성을 뷰 컴포넌트에서 불러와 화면을 구성 하게 된다.
    즉, 컴포넌트를 모아서 시각적으로 표시될 컴포넌트이다.

    오늘 깨달은 가장 중요한건 React컴포넌트는 첫글자가 무조건
    대문자여야 한다.
    아니라면 오류가 발생한다.
*/

const PostPage = ({match}) => {
    const {id, type} = match.params
    console.log(type);
    return (
        <PageTemplate>
            <PostContainer id = {id} postType = {type} />
            <AskRemoveModalContainer match = {match} />
            <MenuBarContainer match = {match} />
            <LoginModalContainer  />
        </PageTemplate>
    );
}

export default PostPage