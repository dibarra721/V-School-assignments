import React, {useContext, useEffect} from 'react'
import IssueForm from '../forms/AddIssue.js'
import IssueList from './IssueList.js'
import { UserContext } from "../context/UserProvider.js"


export default function Profile() {

    const {
        user: { username },
        addIssue,
        getUserIssues,
        issues
    } = useContext(UserContext)

 useEffect(() => {
        getUserIssues()
    }, [])


    return (
        <>
        <div className="profile">
            <h1>Welcome {username}! This is your private portal</h1>
            <center><h3>Post your Issue</h3></center>
            <IssueForm addIssue={addIssue} />
            
</div>

            <div className="topics">
               <center> <h3>Issues you care about</h3></center>
                <IssueList issues={issues} />
            </div>
            </>
       
    )
}