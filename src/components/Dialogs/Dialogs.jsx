import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import { render } from '@testing-library/react'
 
class Dialogs extends React.Component{
    constructor(props){
        super(props)
        
    }
    addMessage = () =>{
        this.props.addMessage()
    }
    onMessageChange = (e) => {
        let text = e.target.value
        this.props.updateNewMessageText(text)
    }
 
render(){
    let dialogsArray = this.props.dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)
    let messagesArray = this.props.dialogsPage.messages.map(elem => <Messages message={elem.message} key={elem.id}/>)
     return  <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsArray}
            </div>
            <div className={s.messages}>
                {messagesArray}
                <textarea onChange={this.onMessageChange} value={this.props.newMessageText} placeholder="введи шось"/> <br/>
                <button onClick={this.addMessage}>Add Message</button>
            </div>
        </div>
    
}
   
}

export default Dialogs;