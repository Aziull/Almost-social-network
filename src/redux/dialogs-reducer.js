const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDAETE-NEW-MESSAGE-TEXT"

let initialState = {
    messages: [
        { id: 1, message: 'first' },
        { id: 2, message: 'second' },
        { id: 3, message: 'third' }
    ],
    dialogs: [
        { name: 'Sasha', id: 1 },
        { name: 'Yarik', id: 2 },
        { name: 'Oleg', id: 3 },
        { name: 'Andrey', id: 4 },
        { name: 'Nazar', id: 5 }
    ],
    newMessageText: ''

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case ADD_MESSAGE:
            {
                let newMessage = {
                    id: 6,
                    message: state.newMessageText
                };
                return {
                    ...state,
                    newMessageText: '',
                    messages: [...state.messages, newMessage]
                }
            }
        default:
            return state;
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;