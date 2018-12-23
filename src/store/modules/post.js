import {createAction, handleActions} from 'redux-actions';

import {Map, fromJS} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

// action type
const READ_POST = 'post/READ_POST';
const REMOVE_POST = 'post/REMOVE_POST';

// action creators
export const readPost = createAction(READ_POST, api.readPost);
export const removePost = createAction(REMOVE_POST, api.removePost)

// initial State
const initialState = Map({
    post: Map({}),
    postType : ''
});

//reducer handleActions가 레듀서를 뜻하는 말인가
export default handleActions({
    ...pender({
        type:READ_POST,
        onSuccess : (state, action) => {
            const post = action.payload.data.Item;
            /*
                {data : post} 이렇게 값을 할당 받으면
                payload에 담긴 data property가
                post에 담기게 된다.
            */
            const {postType} = post
            return state.set('post', fromJS(post))
                        .set('postType', postType);
        }
    }),
}, initialState)