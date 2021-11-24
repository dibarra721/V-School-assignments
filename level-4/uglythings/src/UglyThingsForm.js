import React, {useContext, useState} from "react"
import {UglyThingsContext} from './uglyContext'
import "./App.css"



export default function UglyThingsForm(props) {
      
          const initThing = {
              title: '',
              description: '',
              imgUrl: '',
          }
          const [inputData, setInputData] = useState(initThing)
      
          const context = useContext(UglyThingsContext)
      
          const handleChange = (event) => {
              const{name, value} = event.target
              setInputData(prevInputData => ({...prevInputData, [name]: value}))
          }
      
          return (
              <div className="formContainer">
                    <h2>Create a list of Ugly things</h2>
                    <h3>You  can add to your list, edit, and delete </h3>
                  <form onSubmit={(event) => {
                      event.preventDefault()
                      context.handleSubmit({title: inputData.title, description: inputData.description, imgUrl: inputData.imgUrl})
                  }}>

                      <input placeholder="Ugly Title" name="title" value={inputData.title} onChange={handleChange}></input>
                      <input placeholder="Why is this Ugly" name="description" value={inputData.description} onChange={handleChange}></input>
                      <input placeholder="Img Url" name="imgUrl" value={inputData.imgUrl} onChange={handleChange}></input>
                      <button type="submit">Submit</button>
                  </form>
                  <br />
                  <br />
                  <hr />
              </div>
          )
      }
