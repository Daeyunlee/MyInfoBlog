import React from 'react';

import PageTemplate from 'components/common/PageTemplate';
import PostInfo from 'components/post/PostInfo';
import PostBody from '../components/post/PostBody/PostBody';

/*
    라우트 처리가 되어 이동하게 될 컴포넌트이다.
    필요한 구성을 뷰 컴포넌트에서 불러와 화면을 구성 하게 된다.
    즉, 컴포넌트를 모아서 시각적으로 표시될 컴포넌트이다
*/

const PostPage = () => {

    return (
        <PageTemplate>
            <PostInfo>
                <PostBody />
            </PostInfo>
        </PageTemplate>
    );
}

export default PostPage