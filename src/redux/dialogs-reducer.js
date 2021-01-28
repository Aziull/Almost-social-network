const ADD_MESSAGE = "ADD-MESSAGE"
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
    ]
   

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_MESSAGE:
            {
                let newMessage = {
                    id: state.messages.length+1,
                    message: action.newMessageText
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            }
        default:
            return state;
    }
}

export const addMessageCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })


export default dialogsReducer;