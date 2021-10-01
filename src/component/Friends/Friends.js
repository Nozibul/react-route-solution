import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './friends.css'

const Friends = () => {

    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h2>My all Friends of {friends.length}</h2>
            <div className="friends">
                {
                    friends.map(friend => <Friend key={friend.name} friend={friend}/>)
                }
            </div>
        </div>
    );
};

export default Friends;