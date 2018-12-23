import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';
import AskRemoveModal from 'components/modal/AskRemoveModal';
import {withRouter} from 'react-router-dom';
/*
    실제로 라우터를 하는건 아니지만
    라우터에 필요한 메서드들을 withRouter를 통해서 받을 수 있다.
*/

class AskRemoveModalContainer extends Component {

    handleCancel = () => {
        const {BaseActions} = this.props;
        BaseActions.hideModal('remove');
    }

    handleConfirm = async () => {
        const{PostActions, match, history, BaseActions} = this.props;
        const {id} = match.params;

        try {
            await PostActions.removePost({id});
            BaseActions.hideModal('remove')
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    render () {
        const {handleCancel, handleConfirm} = this;
        const {visible} = this.props;

        return (
            <AskRemoveModal 
                visible = {visible}
                onCancel = {handleCancel}
                onConfirm = {handleConfirm}
            />
        )
    }
}

export default connect(
    state => ({
        visible : state.base.getIn(['modal', 'remove'])
    }),
    dispatch => ({
        BaseActions : bindActionCreators(baseActions, dispatch),
        PostActions : bindActionCreators(postActions, dispatch)
    })
)(withRouter(AskRemoveModalContainer))