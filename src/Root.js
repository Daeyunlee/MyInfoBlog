/*
    클라이언트 사이드 렌더링 용 컴포넌트이다.
    웹브라우저에서 사용하는 라우터 BrowserRouter 컴포넌트 안에 감싼다.
    서버사이드 라우터는 StaticRouter이다.
*/

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'components/App';

import {Provider} from 'react-redux';
import configure from 'store/configure';

/*
    configure에서 설정한 스토어 설정을 불러온다.
    클라이언트 사이드 렌더링이므로 초기 값 인자를 줄 필요는 없다.
    (레듀서, 초기값, 미들웨어)로 구성된다.
    단 초기 값은 생략 해도 가능하다.

    configure은 서버사이드 렌더링을 염두 해 놓은 스토어 구성 함수이다.

    Provider는 스토어를 컴포넌트에 쉽게 연결해
    준다.
*/

const store = configure();

const Root = () => {

    return (
        <Provider store = {store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;