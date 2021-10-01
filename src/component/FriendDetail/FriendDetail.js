import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './friendDetail.css'

const FriendDetail = () => {
    const {friendid} =useParams()

    const [user, setUser] =useState({})
    // friend er detail dekhanor jonno akahne dynamic vabe data load korte hobe
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendid}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setUser(data))
        
    },[])

    const history =useHistory()
    const handlBack = () =>{
        history.push('/friends')
    }
    return (
        <div className="friendss">
            <h2>Friend Details:{friendid}</h2>
            <h2>Name:{user.name}</h2>
            <h4>Phone:{user.phone}</h4>
            
 {/* optional chaining na dile company er name ta dekhabe na bec company prothom obostai undefined thake */}
            <p>Work at: {user.company?.name}</p> 

            <br />
            <button onClick={handlBack}>back</button>
        </div>
    );
};

export default FriendDetail;