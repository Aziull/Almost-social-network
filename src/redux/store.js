import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sitebarReducer from "./sitebar-reducer"



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello', likesCounter: 20 },
                { id: 2, message: 'Dear', likesCounter: 72 }
            ],
            newPostText: 'something',
            profile:null
        },
        dialogsPage: {
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
        },
        sitebar: {

        }
    },
    _callSubscriber() {
        console.log('log changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sitebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store
