import React from 'react';
import EditorTemplate from '../components/Editor/EditorTemplate/EditorTemplate';
import EditorPane from 'components/Editor/EditorPane'
import EditorHeader from 'components/Editor/EditorHeader'
import PreviewPane from 'components/Editor/PreviewPane'

/*
    라우트 처리가 되어 이동하게 될 컴포넌트이다.
    필요한 구성을 뷰 컴포넌트에서 불러와 화면을 구성 하게 된다.
    즉, 컴포넌트를 모아서 시각적으로 표시될 컴포넌트이다
*/

const EditorPage = () => {

    return (
        <EditorTemplate 
            header = {<EditorHeader />}
            editor = {<EditorPane />}
            preview = {<PreviewPane />}
        />
    );
}

export default EditorPage;