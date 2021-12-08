import React, { useState, useEffect } from "react";
import "./App.css"
import axios from "axios";
const UglyThingsContext = React.createContext();

 
function UglyContextProvider(props) {

  const [listOfUgly, setListOfUgly] = useState([])
  const handleSubmit = (newItem) => {
      axios.post("https://api.vschool.io/dianaibarra/thing", newItem)
          .then(response => {
              console.log(response.data)
              setListOfUgly(prevList => {
                  return [response.data, ...prevList]
              })
          })
  }
  const editThing = (_id, editedItem) => {
      axios.put(`https://api.vschool.io/dianaibarra/thing/${_id}`, editedItem)
          .then(response => {
              console.log(response.data)
              let editedList = listOfUgly.map(thing => thing._id === _id ? response.data : thing)
              setListOfUgly(editedList)
          })
  }
  const deleteThing = (_id) => {
      axios.delete(`https://api.vschool.io/dianaibarra/thing/${_id}`)
          .then(response => {
              console.log(response.data)
             const filterThing = listOfUgly.filter(thing => thing._id !== _id)
              return setListOfUgly(filterThing)
          })
          .catch(error => console.log(error))
  }
  useEffect(() => {
      axios.get("https://api.vschool.io/dianaibarra/thing/" )
          .then(response => {
               setListOfUgly(response.data)
          })
  }, [])

  return (
      <UglyThingsContext.Provider value={{
        listOfUgly, 
          handleSubmit, 
          editThing, 
          deleteThing,
      }}>
          {props.children}
      </UglyThingsContext.Provider>
  )
}

export {UglyContextProvider,UglyThingsContext}