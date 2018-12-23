import {createAction, handleActions} from 'redux-actions';

import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';

// action type
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';
const SET_WIDTH = 'base/SET_WIDTH';
const SET_POSTTYPE = 'base/SET_POSTTYPE';

// action creators
export const showModal = createAction(SHOW_MODAL);
export const setWidth = createAction(SET_WIDTH);
export const hideModal = createAction(HIDE_MODAL);
export const setpostTypes = createAction(SET_POSTTYPE);

// initial State
const initialState = Map({
    // 모달의 가시성 상태
    modal: Map({
        remove: false, // 삭제 모달
        login: false, //로그인 모달
        menu: false
    }),
    width : "",
    postTypes : List(),
    isMobile : false
});

//reducer handleActions가 레듀서를 뜻하는 말인가
export default handleActions({
    [SHOW_MODAL]: (state, action) => {
        const {payload : modalName} = action;
        console.log("hi!", action.payload)
        return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
        const {payload: modalName} = action;
        console.log(modalName);
        return state.setIn(['modal', modalName], false);
    },
    [SET_WIDTH] : (state, action) => {
        return state.set('width', action.payload)
                    .set('isMobile', action.payload < 640);
    },
    [SET_POSTTYPE] : (state, action) => {
        return state.set('postTypes', fromJS(action.payload))
    }
}, initialState)