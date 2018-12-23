import React from 'react';
import {Map} from 'immutable';

import {createAction, handleActions} from 'redux-actions';

//action Type
const SET_TIME = 'home/SET_TIME';

// action creators
export const setTime = createAction(SET_TIME);

//initialState
const initialState = Map({
    nowTime : ""
})

export default handleActions({
    [SET_TIME] : (state, action) => {
        return state.set('nowTime', action.payload);
    }
}, initialState)