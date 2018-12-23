import React from 'react';

import MenuBarContainer from 'containers/menu/MenuBarContainer'
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import LoginModalContainer from 'containers/modal/LoginModalContainer'
/*
    라우트 처리가 되어 이동하게 될 컴포넌트이다.
    필요한 구성을 뷰 컴포넌트에서 불러와 화면을 구성 하게 된다.
    즉, 컴포넌트를 모아서 시각적으로 표시될 컴포넌트이다
*/

const ListPage = ({match}) => {
    const {tag, page = 1, type, search} = match.params;
    return (
        <PageTemplate>
            <ListWrapper>
                <ListContainer 
                    page = {page}
                    tag = {tag}
                    type = {type}
                    search = {search}
                />
            </ListWrapper>
            <MenuBarContainer />
            <LoginModalContainer />
        </PageTemplate>
    );
}

export default ListPage