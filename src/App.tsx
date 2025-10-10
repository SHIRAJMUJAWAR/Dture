 import { Route, Routes } from 'react-router-dom'
import './App.css'
import Feed from './components/Feed'
 import Navbar from './components/Navbar'
import Home from './components/Home'
 
import Rooms from './components/Rooms'
import Profile from './components/Profile'
import Explore from './components/Explore'
import Trend from './components/Trend'
import CreateDebates from './components/CreateDebates'

function App() {
 

  return (
    <>
       <Navbar></Navbar>
     
        <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/feed" element={< Feed />} />  
        <Route path="/rooms" element={<Rooms/>} />  
        <Route path="/proflie" element={<Profile/>} /> 
         <Route path="/explore" element={<Explore/>}/>
          <Route path="/trend" element={<Trend/>}/> 
          <Route path="/create" element={<CreateDebates/>}/> 
      </Routes>
    </>
  )
}

export default App
