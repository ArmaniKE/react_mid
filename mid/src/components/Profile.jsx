import React from 'react'
import { users } from './UserInfo'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className="profile">
        {users.map(user => (
            <div key={user.id} className='users'>
                <Link to={`/user/${user.id}`}>
                    <div className='user_info'>
                        <img src={user.img} alt='user_img'/>
                        <h1>{user.name } {user.surname}</h1>
                        <h1>Birthdate: {user.birthdate}</h1>
                        <h1>Your Email: {user.email}</h1>
                        <h1>Your password: {user.password}</h1>
                        <h1></h1>
                    </div>
                </Link>
            </div>
        ))}   
    </div>
  )
}
