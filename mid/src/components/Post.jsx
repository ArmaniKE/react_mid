import React from 'react'
import { posts } from './Data'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Post() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => console.log("Hello, World!"), 3000);
        return () => clearTimeout(timer);
      }, []);

    const { id } = useParams();
    const post = posts.find(post => post.id === +id);

    return (
        <div className="post">
            <div>
                <h1>{post.name}</h1>
                <h4 className='desc'>Description: {post.desc}</h4>
                <div className="info">
                    <h2>Likes: {count}</h2>
                    <button onClick={() => setCount(count + 1)} className="btn">
                        Like
                    </button>
                    <h3 className="comments">Comments:
                        {posts.map(post => (
                        <ul>
                            <li>{post.comments}</li>
                        </ul>
                        ))}   
                    </h3>
                </div>

            </div>
        </div>
    )
}
