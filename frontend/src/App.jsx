import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import FeedSection from './pages/FeedSection'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CreatePost/>} />
    <Route path="/Feed" element={<FeedSection/>}/>
    
    </Routes>
  )
}

export default App
