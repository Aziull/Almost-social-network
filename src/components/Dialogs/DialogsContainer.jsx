import React from 'react'
import { withAuthRedirect } from '../../hoc/AuthRedirect'

import { addMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';

import { connect } from 'react-redux';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => { dispatch(addMessageCreator(newMessageText)) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)