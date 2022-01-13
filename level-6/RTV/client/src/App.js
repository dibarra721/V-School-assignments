import React , {useContext} from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from "./context/UserProvider"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Public from "./components/Public"
import NotFound from "./components/NotFound.js"
import Auth from "./components/Auth"
import ProtectedRoute from "./components/ProtectedRoute"
import './index.css';



export default function App() {

  const { token, logout, issues } = useContext(UserContext)


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
        
       <Route exact path="/public" element={<Public/>} render={() => <Public />} />

        <Route path= "*"element={<NotFound/>} render={() => <NotFound />} />
       

      </Routes>


    </div><Footer /></>
  )
}
