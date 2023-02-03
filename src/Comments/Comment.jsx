import React from 'react'


function Comment(props) {
    const {name,email,body,id} = props
    return (
        <li className='comment'>
            <div className="comments-header">
            <h3 className="email">{email}</h3>
            <h3 className="name">{name}</h3>
            </div>
            <p className="mesage">{body}</p>
        </li>
    )
  
}

export default Comment

