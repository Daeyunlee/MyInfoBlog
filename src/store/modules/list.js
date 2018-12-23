import {createAction, handleActions} from 'redux-actions';

import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';
import readPost from 'lib/readArray';

// action type
const READ_POST_LIST = 'list/READ_POST_LIST';
const MAKE_LASTPAGE = 'list/MAKE_LASTPAGE';
const SORT_POST_LIST = 'list/SORT_POST_LIST';

const READ_TAG_LIST = 'list/READ_TAG_LIST';
const READ_MENU_LIST = 'list/READ_MENU_LIST';
const READ_SEARCH_LIST = 'list/READ_SEARCH_LIST';

// action creators
export const readPostList = createAction(READ_POST_LIST, api.readList);
export const makeLastpage = createAction(MAKE_LASTPAGE);
export const sortPostList = createAction(SORT_POST_LIST);
export const readTag = createAction(READ_TAG_LIST);
export const readMenuList = createAction(READ_MENU_LIST);
export const readSearchList = createAction(READ_SEARCH_LIST);

// initial State
const initialState = Map({
    AllpostList: List(),
    lastPage: null,
    sortList: List(),
    pageList: List(),
    tagList: List(),
    MenuList: List(),
    ListType: null,
    TagType: null,
    SearchList: List(),
    search: null
});

//reducer handleActions가 레듀서를 뜻하는 말인가
export default handleActions({
    [MAKE_LASTPAGE] : (state, action) => {
        const lastPage = action.payload;
        return state.set('lastPage', lastPage);
    },
    ...pender({
        type:READ_POST_LIST,
        onPending: (state, action) => {
            console.log("Geting a List");
        },
        onSuccess : (state, action) => {
            const AllpostList = action.payload.data.Items;
            AllpostList.reverse();
            const list = readPost(AllpostList);
            return state.set('AllpostList', fromJS(AllpostList))
                        .set('lastPage', list.lastPage)
                        .set('pageList', fromJS(list.array))
        }
    }),
    [SORT_POST_LIST] : (state, action) => {
        const sortList = action.payload;
        return state.set('sortList', sortList);
    },
    [READ_TAG_LIST] : (state, action) => {
        const tag = action.payload;
        if(!tag) return state.set('tagList', List());
        const tagsArray = state.get('AllpostList').toJS();
        const hasTag = tagsArray.filter(obj => obj.tags.includes(tag));
        const list = readPost(hasTag);
        return state.set('tagList', fromJS(list.array))
                    .set('lastPage', list.lastPage)
                    .set('TagType', (tag ? tag : null ));
    },
    [READ_MENU_LIST] : (state, action) => {
        const type = action.payload;
        if(!type) return state.set('MenuList', List());
        const MenuArray = state.get('AllpostList').toJS();
        const hasMenu = MenuArray.filter(obj => obj.postType === type);
        const menu = readPost(hasMenu);
        return state.set('MenuList', fromJS(menu.array))
                    .set('lastPage', menu.lastPage)
                    .set('ListType', type ? type : null);
    },
    [READ_SEARCH_LIST] : (state, action) => {
        const search = action.payload;
        if(!search) return state.set('searchList', List());
        const MenuArray = state.get('AllpostList').toJS();
        const hasMenu = MenuArray.filter(obj => obj.title.include(search));
        const menu = readPost(hasMenu);
        return state.set('MenuList', fromJS(menu.array))
                    .set('lastPage', menu.lastPage)
                    .set('search', search ? search : null);
    }
}, initialState)