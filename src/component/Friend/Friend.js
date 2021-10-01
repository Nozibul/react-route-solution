import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './friend.css'

const Friend = (props) => {
    // console.log(props.friend.address)
    const {id, name, email, address} = props.friend

    const history =useHistory()
    const handlFriendClick= () =>{
        // history.push('/home')
        history.push(`/friend/${id}`)
    }

    return (
        <div className="friend">
            <h2>I am {name}</h2>
            <h4>Email: {email}</h4>
            <h3>Address: {address.city}</h3>
            <Link to={`/friend/${id}`}>Visit me</Link> <br />

            <button onClick={handlFriendClick}>Click ME</button>

        </div>
    );
};

export default Friend;