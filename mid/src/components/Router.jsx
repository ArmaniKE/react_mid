import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/post' element={<Home />}/>
            <Route path='/post/:id' element={<Post />} />
            <Route path='/profile' element={<Profile />}/>
        </Routes>
    </BrowserRouter>
  )
}
