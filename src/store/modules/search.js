import React from 'react';

import {Map} from 'immutable'
import {createAction, handleActions} from 'redux-actions';

// action Type
const SEARCHING = 'search/SEARCHING';
const SEARCH_DATA = 'search/SEARCH_DATA'

//action Creator
export const searching = createAction(SEARCHING);
export const searchData = createAction(SEARCH_DATA);

//initial State
const initialState = Map({
    inputSearch : '',
    writeSearch : '',
})

//reducer
export default handleActions({
    [SEARCHING] : (state, action) => {
        return state.set('inputSearch', action.payload);
    },
    [SEARCH_DATA] : (state, action) => {
        return state.set('writeSearch', state.get('inputSearch'))
                    .set('inputSearch', '');
    }
},initialState)