import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import { Field, reduxForm } from 'redux-form'
import {Textarea} from '../Common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'


const Dialogs = (props) => {

 
    const addMessage = (value) => {
        props.addMessage(value.newMessageText)
    }
        let dialogsArray = props.dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)
        let messagesArray = props.dialogsPage.messages.map(elem => <Messages message={elem.message} key={elem.id} />)

        return <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsArray}
            </div>
            <div className={s.messages}>
                {messagesArray}
                <AddMessageFormRedux onSubmit={addMessage} />
            </div>
        </div>


}
 let maxLength10 = maxLengthCreator(10)
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} validate={[required,maxLength10]} name='newMessageText' placeholder="введи шось" /> 
        <button >Add Message</button>
    </form>
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;