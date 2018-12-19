import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as editorActions from 'store/modules/editor';
import EditorHeader from 'components/Editor/EditorHeader';

class EditorHeaderContainer extends Component {

    render () {

        return (
            <EditorHeader 
            
            />
        )
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(EditorHeaderContainer);