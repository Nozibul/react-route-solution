import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './detail.css'

const Postdetails = () => {
   const {postId} = useParams()

   
   const [post, setPost] = useState({})
   useEffect(()=>{
       const url ='https://jsonplaceholder.typicode.com/posts/3';
       fetch(url)
       .then(res => res.json())
       .then(data =>setPost(data))
   },[])

    return (
        <div className="single-post">
            <h3>My Post Id : {postId}</h3>
            <h3>{post.title}</h3>
            <p>{post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default Postdetails;