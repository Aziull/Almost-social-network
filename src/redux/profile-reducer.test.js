
import profileReducer, { addPostCreator, deletePost } from './profile-reducer'
let state = {
    posts: [
        { id: 1, message: 'Hello', likesCounter: 20 },
        { id: 2, message: 'Dear', likesCounter: 72 }
    ]
}
it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostCreator('testA')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectations
    expect(newState.posts.length).toBe(3);
})

it('message of posts should be correct', () => {
    // 1. test data
    let action = addPostCreator('testA')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectations
    expect(newState.posts[2].message).toBe('testA');
})

it('after deleting length of posts should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectations
    expect(newState.posts.length).toBe(1);
})