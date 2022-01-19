import React, { useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization= `Bearer ${token}`
    return config
})


 function UserProvider(props) {
    const initState = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || "",
      issues: JSON.parse(localStorage.getItem("issues")) || [],
      comment: [],
      errMsg:"",
      // allIssues: JSON.parse(localStorage.getItem("allissues")) || []

    };
  
    const [userState, setUserState] = useState(initState);
    // const [allIssues, setAllIssues] = useState([])



  
    function signup(credentials) {
      axios
        .post("/auth/signup", credentials)
        .then((res) => {
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
        setUserState(prevUserState => ({ ...prevUserState, user, token }))
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
          // getAllIssues()
          setUserState(prevUserState => ({...prevUserState, user, token}))
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg));
    }
  
  
  function logout () {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      localStorage.removeItem("issues")
    localStorage.removeItem("allissues")
      setUserState({
          user: {},
          token: "",
          comment: [],
          issues: []
      })
  }
  
  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }
  
  
  function resetAuthErr(){
    setUserState(prevState => ({
      ...prevState,
      errMsg:""
    }))
  }


  function getUserIssues() {
    userAxios.get('/api/issue/user')
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err))
  }
  
  
  function addIssue(newIssue) {
    userAxios.post('/api/issue', newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err))
}

// function getUserIssues(){
//   userAxios.get("/api/issue/user")
//   .then( res => {
//     localStorage.setItem("issues", JSON.stringify(res.data))
//     setUserState(prevState => ({
//       ...prevState,
//       issues:res.data
//     }))
//   })
//   .catch (err => console.log(err.response.data.errMsg))
// }


// function getAllIssues(){
//   userAxios.get("/api/issue")
//   .then(res => {
//     localStorage.setItem("allissues", JSON.stringify(res.data))
//     setUserState(prevState => ({
//       ...prevState,
//       allIssues: res.data
//     }))
//   })
//   .catch (err => console.log(err))
// }
  

function deleteIssue(issueId) {
  userAxios.delete(`/api/issue/${issueId}`)
      .then(res => setUserState(prevState => ({
          ...prevState,
          issues: prevState.issues.filter(issue => issue._id !== issueId)
      })))
      .catch(err => console.log(err)
      )
  return getUserIssues()
}


function addLikeToIssue(id){
  console.log('from like : ', id);
  userAxios.put(`/api/issue/like/${id}`)
  .then(res => {
    console.log(res)
    setUserState(prevState => ({
      ...prevState,
      issues: prevState.issues.likes + 1,
      allIssues: prevState.allIssues,
    }))
  })
    .catch(err => console.log(err))
}

function addDislikeToIssue(id){
  console.log('id: ', id);
  userAxios.put(`/api/issue/dislike/${id}`)
    .then(res => {
      console.log(res)
      setUserState(prevState => ({
        ...prevState,
        issues: prevState.issues,
        allIssues: prevState.allIssues,
      }))
    })
    .catch(err => console.log(err))
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
          resetAuthErr,
          deleteIssue,
          addDislikeToIssue,
          addLikeToIssue,
    
        }}
      >
        {props.children}
      </UserContext.Provider>
    );
  }
  

  export { UserContext, UserProvider}