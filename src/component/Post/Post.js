import React from 'react';
import { useHistory } from 'react-router';
import './post.css'

const Post = (props) => {
    const {title, id}= props.posts

    const history = useHistory()
    const handlPost = ()=> {
         history.push(`/posts/${id}`) // atar jonnon dynamic akta route lagbe jehetu ata dynamic vabe use korsi id
    }
    return (
        <div className="post">
            <h3>My: {title}</h3>
            <button onClick={handlPost}>Details</button> 
        </div>
    );
};

export default Post;