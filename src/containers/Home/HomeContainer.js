import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from 'store/modules/home';
import * as listActions from 'store/modules/list';
import HomeWrapper from 'components/Home/HomeWrapper';

class HomeContainer extends Component {

    getPostList = async () => {
        const {ListActions} = this.props;
        try {
            await ListActions.readPostList();
        } catch (e) {
            console.log(e);
        }
    }

    handleOnTime = () => {
        const {HomeActions } = this.props

        const NotTime = new Date();
        let timeNow = NotTime.getHours()+':';
        timeNow += NotTime.getMinutes();
        console.log(timeNow);
        HomeActions.setTime(timeNow);
    }

    componentDidMount () {
        this.handleOnTime();
        setTimeout(this.handleOnTime(), 30000);
        this.getPostList();
    }

    render () {
        const {nowTime, children} = this.props

        return (
            <div>
                <HomeWrapper nowTime = {nowTime}>
                    {children}
                </HomeWrapper>
            </div>
        );
    }
}

export default connect(
    state => ({
        nowTime : state.home.get('nowTime')
    }),
    dispatch => ({
        HomeActions : bindActionCreators(homeActions, dispatch),
        ListActions : bindActionCreators(listActions, dispatch) 
    })
)(HomeContainer);