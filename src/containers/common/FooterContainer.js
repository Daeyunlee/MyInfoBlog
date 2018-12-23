import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Footer from 'components/common/Footer';
import * as baseActions from 'store/modules/base';

class FooterContainer extends Component{

    handleOnLogin = () => {
        const {BaseActions} = this.props;
        BaseActions.showModal('login');
    }

    render () {
        const {handleOnLogin} = this;
        return (
            <Footer 
                onClick = {handleOnLogin}
            />
        );
    }
}

export default connect(
    null,
    dispatch => ({
        BaseActions : bindActionCreators(baseActions, dispatch)
    })
)(FooterContainer)