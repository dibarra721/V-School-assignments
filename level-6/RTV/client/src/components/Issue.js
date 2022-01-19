import React, {useContext, useState} from "react"
import { UserContext } from "../context/UserProvider"


export default function Issue(props){
    const {deleteIssue} = useContext(UserContext)
    const {
        title,
        description,
        _id
    } = props

const [editToggle, setEditToggle] = useState(false)




    return(
        <div className="issue">
        {
          !editToggle ?
            <>
              <h1>{ title }</h1>
              <h3>{ description }</h3>

              <button onClick={() => deleteIssue(_id)}>Delete Issue</button>
              <button onClick={() => setEditToggle(prevState => !prevState)}>Edit Issue</button>
            </>
            :
            <>
              {/* <EditIssueForm {...props}  setEditToggle={setEditToggle} addUserIssue={addUserIssue} /> */}
              <button onClick={() => deleteIssue(_id)}>Delete Issue</button>
              <button onClick={() => setEditToggle(prevState => !prevState)}>Cancel</button>
            </>
        }
      </div>
    )
  }