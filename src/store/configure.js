import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// 개발 모드 일때만 Redux DevTools를 적용
const inDev = process.env.NODE_ENV === 'development';
const devtools = inDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// AND 연산자를 이용해서 isDev가 true 일때만 원하는 값을 반환 해준다.

const composeEnhancers = devtools || compose;

/* 
    preloadedState는 추후 서버사이드 렌더링을 했을 떄 전달 받는 초기값 음 
    지금은 서버사이드렌더링은 어려울지도 모르겠다.
    시도는 해보는데 어려울꺼 같다.
*/
const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;