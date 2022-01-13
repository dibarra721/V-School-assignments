import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization= `Bearer ${token}`
    return config
})


export default function UserProvider(props) {
    const initState = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || "",
      issues: JSON.parse(localStorage.getItem("issues")) || [],
      errMsg:""
    };
  
    const [userState, SetUserState] = useState(initState);
  
    function signup(credentials) {
      axios
        .post("/auth/signup", credentials)
        .then((res) => {
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          SetUserState((prevUserState) => ({
            ...prevUserState,
          }));
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg));
    }
  
    function login(credentials) {
      axios
        .post("/auth/login", credentials)
        .then((res) => {
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          getUserIssues()
          SetUserState((prevUserState) => ({
            ...prevUserState,
          }));
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg));
    }
  
  
  function logout () {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      SetUserState({
          user: {},
          token: "",
          issues: []
      })
  }
  
  function handleAuthErr(errMsg){
    SetUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }
  
  
  function resetAuthErr(){
    SetUserState(prevState => ({
      ...prevState,
      errMsg:""
    }))
  }
  function getUserIssues() {
    userAxios.get("api/issue/user")
      .then(res => {
        SetUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err))
  }
  
  
  
  function addIssue(newIssue) {
  userAxios.post("/api/issue", newIssue)
    .then( res => {
        SetUserState(prevState => ({
            ...prevState,
            issues: [...prevState.issues, res.data]
        }))
    })
      
      .catch(err => console.log(err.response.data.errMsg))
  }
  
  
    return (
      <UserContext.Provider
        value={{
          ...userState,
          signup,
          login,
          logout,
          addIssue,
          getUserIssues,
          resetAuthErr
        }}
      >
        {props.children}
      </UserContext.Provider>
    );
  }
  