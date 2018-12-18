import React from 'react';

import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import PostList from 'components/list/PostList';

import Pagination from 'components/list/Pagination'
/*
    라우트 처리가 되어 이동하게 될 컴포넌트이다.
    필요한 구성을 뷰 컴포넌트에서 불러와 화면을 구성 하게 된다.
    즉, 컴포넌트를 모아서 시각적으로 표시될 컴포넌트이다
*/

const ListPage = () => {

    return (
        <PageTemplate>
            <ListWrapper>
                <PostList />
                <Pagination />
            </ListWrapper>
        </PageTemplate>
    );
}

export default ListPage