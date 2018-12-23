import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listActions from 'store/modules/list';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';

class ListContainer extends Component {

    getPostList = async () => {
        const {ListActions, type, tag, search} = this.props;
        try {
            await ListActions.readPostList().then(() => {
                if(type) {
                    ListActions.readMenuList(type);
                } else if (tag) {
                    ListActions.readTag(tag);
                } else if (search) {
                    ListActions.readSearchList(search);
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount () {
        const {pageList} = this.props
        if (pageList.size === 0){
            this.getPostList();
        }
    }
    
    componentDidUpdate (prevProps, prevState) {
        const checked = prevProps.page !== this.props.page ;
        const tagCheck = prevProps.tag !== this.props.tag;
        const listChecked = prevProps.type !== this.props.type;
        const searchChecked = prevProps.search !== this.props.search;
        const {type, tag, ListActions, search} = this.props;

        if (checked){
            document.documentElement.scrollTop = 0;
        } 
        if (listChecked) {
            ListActions.readMenuList(type);
        } else if (tagCheck) {
            ListActions.readTag(tag);
        } else if (searchChecked) {
            ListActions.readSearchList(search)
        }
    }

    // componentWillUnmount() {
    //     this.getPostList();

    // }

    render () {
        const {loading, pageList, page, lastPage, tag, tagList, Menulist, type} = this.props
        if(loading || pageList.size === 0) return null ;
        let postList = [];

        if (tagList.size > 0 && tag) {
            postList = tagList.toJS();
        }else if (Menulist.size > 0 && type) {
            postList = Menulist.toJS();
        }else if (!tag && !type) {
            postList = pageList.toJS();
        }else {
            return null;
        }

        return (
            <div>
                <div>{type}</div>
                <PostList 
                    pageList={postList[page-1]}
                />
                <Pagination
                    lastPage = {lastPage}
                    page = {page}
                    tag={tag}
                    type={type}
                />
            </div>
        );
    }
}


export default connect(
    state => ({
        AllpostList : state.List.get('AllpostList'),
        lastPage : state.List.get('lastPage'),
        loading: state.pender.pending['list/READ_POST_LIST'],
        /*
            redux-pender의 pending 처리 중인 액션의 타입을
            property로 넣어주면 로딩 중인 상태를 받을 수 있다.
        */
       pageList: state.List.get('pageList'),
       tagList: state.List.get('tagList'),
       Menulist: state.List.get('MenuList')
    }),
    dispatch => ({
        ListActions : bindActionCreators(listActions, dispatch)
    })
)(ListContainer);