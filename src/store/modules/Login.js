import React from 'react';
import {createAction, handleActions} from 'redux-actions';

import {Map} from 'immutable';
import * as api from 'lib/api';

// action types
const WRITE_LOGIN = 'login/WRITE_LOGIN';
const WRITING_LOGIN = 'login/WRITING_LOGIN'
const LOGIN_REQ = 'login/LOGIN_REQ';

// action creator
export const writeLogin = createAction(WRITE_LOGIN);
export const writingLogin = createAction(WRITING_LOGIN);
export const loginReq = createAction(LOGIN_REQ, api.loginPost);

// initialState
const initialState = Map({
    idInput : null,
    pwdInput: null,
    Password : null,
    ID : null,
    result : false
})

//reducre
export default handleActions({
    [WRITING_LOGIN] : (state, action) => {
        const {name, value} = action.payload
        return state.set(name, value)
    },
    [WRITE_LOGIN] : (state, action) => (
            state.set('ID', state.get('idInput'))
                .set('Password', state.get('pwdInput'))
                .set('idInput', null)
                .set('pwdInput', null)
    ),
    [LOGIN_REQ] : (state, action) => {
        const result = action.payload;
        console.log(result);
        return ( result 
                ?state.set('loginChecked', result)
                    .set('ID', null)
                    .set("Password", null)
                :state.set('loginChecked', result));
    }
}, initialState)

