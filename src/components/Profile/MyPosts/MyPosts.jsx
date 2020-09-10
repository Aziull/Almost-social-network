import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let onAddPost = () => {
        props.addPost();
    }   

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text);
       

    }

    let postsArray = props.posts.map(elem => <Post message={elem.message} likeCounter={elem.likesCounter} key={elem.id} />)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} placeholder="text" /> <br />
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsArray}
            </div>

        </div>

    );
}
export default MyPosts