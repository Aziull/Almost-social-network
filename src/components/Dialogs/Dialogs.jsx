import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    let addMessage = () =>{
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }
 
let dialogsArray = props.dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)
let messagesArray = props.dialogsPage.messages.map(elem => <Messages message={elem.message} key={elem.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsArray}
            </div>
            <div className={s.messages}>
                {messagesArray}
                <textarea onChange={onMessageChange} value={props.newMessageText} placeholder="введи шось"/> <br/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
}
export default Dialogs;