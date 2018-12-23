import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as searchActions from 'store/modules/search';
import Search from 'components/common/Search';
import {withRouter} from 'react-router-dom';

class SearchContainer extends Component {

    
    handleOnSubmit = (e) => {
        const {SearchActions} = this.props
        console.log(e.key);
        if (e.key === 'Enter') {
            SearchActions.searchData()
        }
    }

    componentDidUpdate (prevProps, prevState) {
        const {writeSearch, history} = this.props;
        if(prevProps.writeSearch !== writeSearch){
            console.log(writeSearch);
            history.push(`/search/${writeSearch}/1`)
        }
    }

    render () {
        const {inputSearch, SearchActions} = this.props;
        const {handleOnSubmit} = this;
        return (
            <Search
                value = {inputSearch}
                onSubmit = {handleOnSubmit}
                onChange = {SearchActions.searching}
            />
        );
    }
}

export default connect(
    state => ({
        inputSearch : state.search.get('inputSearch'),
        writeSearch : state.search.get('writeSearch')
    }),
    dispatch => ({
        SearchActions : bindActionCreators(searchActions, dispatch)
    })
)(withRouter(SearchContainer));