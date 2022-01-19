import React , {useContext} from "react"
import AddIssueForm from "./forms/AddIssueForm"
import IssueList from './IssueList.js'
import { UserContext } from "../context/UserProvider"
// import Issue from "../components/Issue.js"



export default function Profile(){

const {
    
    user: {username} ,
    addIssue,
    issues
}= useContext(UserContext)


return (


<div className="profile">
    <h1> Welcome @ {username} </h1>
<h3>Post an issue</h3>

<AddIssueForm addIssue={addIssue}/>

    <h3>Your Issues</h3>
    <IssueList issues={issues}/>
</div>




)

}