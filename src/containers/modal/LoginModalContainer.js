import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginModal from 'components/modal/LoginModal';
import * as baseActions from 'store/modules/base';
import * as loginActions from 'store/modules/Login';


class LoginModalContainer extends Component {

    handleCancel = () => {
        const {BaseActions} = this.props;
        BaseActions.hideModal('login');
    }

    handleOnChange = (e) => {
        this.props.LoginActions.writingLogin(e.target);
    }

    handleOnSubmit = (e) => {
        const {ID,Password, result, LoginActions} = this.props
        console.log("Enter");
        console.log(ID, Password, result);
        if(e.key === "Enter"){
            LoginActions.writeLogin();
            if (ID && Password && !result) {
                LoginActions.loginReq({ID,Password});
            }
        }
    }

    componentDidUpdate (prevProps, prevState) {
        const {ID, Password, result, LoginActions} = this.props
        
        if(ID && Password){
            LoginActions.loginReq({ID,Password});
        }
        if(result){
            this.handleCancel()
        }
    }

    render () {
        const {children, ID, visible, idInput, pwdInput, result} = this.props
        const {handleOnChange, handleCancel, handleOnSubmit} = this;
        return (
            <LoginModal 
                ID = {ID}
                result = {result}
                idInput = {idInput}
                pwdInput = {pwdInput}
                onChange = {handleOnChange}
                onSubmit = {handleOnSubmit}
                visible = {visible}
                onCalcel = {handleCancel}
            >{children}</LoginModal>
        );
    }
}

export default connect(
    state => ({
        visible : state.base.getIn(['modal','login']),
        idInput : state.login.get('inInput'),
        pwdInput: state.login.get('pwdInput'),
        result : state.login.get('result'),
        ID : state.login.get('ID'),
        Password : state.login.get('Password')
    }),
    dispatch => ({
        BaseActions : bindActionCreators(baseActions, dispatch),
        LoginActions : bindActionCreators(loginActions, dispatch)
    })
)(LoginModalContainer)