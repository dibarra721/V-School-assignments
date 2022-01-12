import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./components/Profile"


export default function App() {

  const {token, logout} = useContext(UserContext)


  return(
    <><div className="wrapper">
      {token && <Navbar logout={logout}/>}
    
      <Routes>
        <Route  exact path="/" element={token ? <Navigate to='/profile/' /> : <Auth />}/>
        <Route element={<ProtectedRoute token={token} />} >
          <Route path="/profile" element={<Profile />}/>
        </Route>
        <Route element={<ProtectedRoute token={token} />} >
          <Route path="/public" element={<Public />}/>
        </Route>
        
       <Route exact path="/public" element={<Feelings/>} render={() => <Feelings />} />

        <Route path= "*"element={<NotFound/>} render={() => <NotFound />} />
       

      </Routes>


    </div><Footer /></>
  )
}
