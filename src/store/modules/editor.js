import {createAction, handleActions} from 'redux-actions';

import {Map} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

//action type
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';
const GET_POST = 'editor/GET_POST'; 
const CHANGE_POST = 'editor/CHANGE_POST';

//action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);
export const getPost = createAction(GET_POST, api.readPost);
export const changePost = createAction(CHANGE_POST, api.changePost);

//initial State
const initialState = Map({
    postId: '',
    title : '',
    markdown : '',
    tags: '',
});

//reducer
export default handleActions({
    [INITIALIZE] : () => initialState,
    [CHANGE_INPUT] : (state ,action) => {
        const {name, value} = action.payload
        return state.set(name, value);
    },
    ...pender({
        type: WRITE_POST,
        onPending: () => {
            console.log('loading')
        },
        onFailure: (state, action) => {
            console.log("Error")
        },
        onSuccess : (state, action) => {
            console.log("Success");
            const {postNum} = action.payload.data
            console.log(postNum);
            return state.set('postId', postNum)
        }
    }),
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const {title, description, tags} = action.payload.data.Item;
            console.log(action.payload.data.Item);
            return state.set('title', title)
                        .set('markdown', description)
                        .set('tags', tags.join(',')); /* 배열 사이에 ,를 넣고 문자열로 나열한다. */
        }
    }),
    ...pender({
        type: CHANGE_POST,
        onPending: () => {
            console.log('loading')
        },
        onFailure: (state, action) => {
            console.log("Error")
        },
        onSuccess : (state, action) => {
            console.log("Success");
            const {postNum} = action.payload.data
            console.log(postNum);
            return state.set('postId', postNum)
        }
    }),
}, initialState)