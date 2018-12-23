export { default as List } from './list';
export { default as post } from './post';
export { default as info } from './info';
export { default as base } from './base';
export { default as editor} from './editor';
export { default as home} from './home';
export { default as search} from './search';
export { default as login } from './Login'
export { penderReducer as pender } from 'redux-pender';

/*
    penderReducer에서 비동기 액션을 관리한다.
    리덕스 모듈을 준비 한 다음에 configure.js을 만들어서
    방금 만든 모듈을 combineReducers로 합치고 penderMiddleware도 적용한다.
    또 개발자 모드일때 redux Devtools가 적용 되도록 만든다.
*/