import React, { useState } from "react";
import axios from 'axios'

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const initState = {
    user: {},
    token: "",
    todos: [],
  };

  const [userState, SetUserState] = useState(initState);

function signUp(credentials) {
    axios.post("/auth/signup", credentials)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}





  return (
    <UserContext.Provider
      value={{
        ...userState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
