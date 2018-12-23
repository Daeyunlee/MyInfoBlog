import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';
import MenuPage from 'components/Menu/MenuPage';
import MenuBar from 'components/Menu/MenuBar';
import {withRouter} from 'react-router-dom';

class MenuBarContainer extends Component {

    handleCancel = () => {
        const {BaseActions} = this.props;
        console.log('close!!')
        BaseActions.hideModal('menu');
    }

    handleConfirm = async () => {
        const{PostActions, match, history, BaseActions} = this.props;
        const {id} = match.params;

        try {
            await PostActions.removePost({id});
            BaseActions.hideModal('menu');
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    render () {
        const {handleCancel, handleConfirm} = this;

        const {visible, postTypes, postType} = this.props

        console.log(visible)

        return (
            <MenuPage visible = {visible} onCancel={handleCancel}>
                <MenuBar
                    types = {postTypes}
                    onConfirm = {handleConfirm}
                    onCancel = {handleCancel}
                    postType={postType}
                />
            </MenuPage>
        )
    }
}

export default connect(
    (state) => ({
        visible : state.base.getIn(['modal', "menu"]),
        postTypes : state.base.get('postTypes'),
        postType : state.post.get('postType')
    }),
    (dispatch) => ({
        BaseActions : bindActionCreators(baseActions, dispatch),
        PostActions : bindActionCreators(postActions, dispatch)
    })
)(withRouter(MenuBarContainer))