import React, {Component} from 'react';
import Header from 'components/common/Header';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base'
/*
    withRouter는 뭐하는 애일까
*/ 

import queryString from 'query-string';

class HeaderContainer extends Component {

    state = {
        postTypes : [
             'Javascript',
             "HTML",
             "CSS",
             "REACT",
             "NodeJS",
             "HTTP",
        ]

    }

    handleRemove = () => {
        const {BaseActions} = this.props;
        BaseActions.showModal('remove');
    }

    handleOnMenu = () => {
        const {BaseActions} = this.props;
        BaseActions.showModal('menu');
    }

    componentDidMount() {
        const {BaseActions} = this.props;
        const {postTypes} = this.state
        BaseActions.setWidth(window.innerWidth);
        BaseActions.setpostTypes(postTypes);
    }

    componentDidUpdate() {
        const {BaseActions} = this.props;
        BaseActions.setWidth(window.innerWidth);
    }

    render () {
        const {handleRemove, handleOnMenu} = this;

        const {match,  width, postType, isMobile} = this.props;
        
        const {id} = match.params;

        const {postTypes} = this.state


        return (
            <Header 
                postTypes = {postTypes}
                postType = {postType}
                onMenu = {handleOnMenu}
                postId = {id}
                onRemove = {handleRemove}
                width = {width}
                Mobile={isMobile}
            />
        )
    }
}

export default connect(
    state => ({
        width : state.base.get('width'),
        postType : state.post.get('postType'),
        isMobile : state.base.get('isMobile')
    }),
    dispatch => ({
        BaseActions : bindActionCreators(baseActions, dispatch)
    })
)(withRouter(HeaderContainer));