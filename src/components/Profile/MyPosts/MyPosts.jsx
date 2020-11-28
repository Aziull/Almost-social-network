import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../Common/FormsControls/FormsControls'

let maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props) => {

    let addPost = (values) => {
        props.addPost(values.newPostText);
    }

    let postsArray = props.posts.map(elem => <Post key={elem.id} message={elem.message} likeCounter={elem.likesCounter} />)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addPost} />
            </div>
            <div className={s.posts}>
                {postsArray}
            </div>

        </div>

    );
})
const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newPostText' placeholder="text" validate={[required, maxLength10]} /> <br />
        <button >Add Post</button>
    </form>
}
const AddPostFormRedux = reduxForm({ form: 'myPostsaddMessageForm' })(AddPostForm)
export default MyPosts