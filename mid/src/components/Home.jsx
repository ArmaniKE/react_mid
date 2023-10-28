import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from './Data'

export default function Home() {
  return (
    // <div className="home">
    //     <Link to='/'><h1>Twitter</h1></Link>
    //     <ul className='info'>
    //         <Link to='/post'><li>Post</li></Link>
    //         <Link to='/profile'><li>Profile</li></Link>
    //     </ul>
    // </div>
    <div>
        <div className="head">
            <Link to='/' className=''><h1>Twitter</h1></Link>
            <Link to='/profile'><h1>Profile</h1></Link>
        </div>
            <div className='body'>
                {posts.map(post => (
                    <div key={post.id} className='posts'>
                        <Link to={`/post/${post.id}`}>
                        <div className='post_info'>
                            <h4>{post.name}</h4>
                            <h6>{post.desc}</h6>
                        </div>
                        </Link>
                    </div>
                ))}   
            </div>
    </div>
  )
}
