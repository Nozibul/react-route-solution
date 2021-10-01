import React, { useEffect, useState } from 'react';
import Post from '../Post/Post'

const Posts = () => {
    
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPosts(data))
    },[])

    return (
        <div>
            <h2>My All Posts :</h2>
            {
                posts.map(post => <Post posts={post} />)
            }
        </div>
    );
};

export default Posts;