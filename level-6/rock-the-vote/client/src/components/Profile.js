import React, {useEffect, useContext} from 'react'
import IssueForm from '../forms/AddIssue.js'
import IssueList from './IssueList.js'
import { UserContext } from "../context/UserProvider.js"


export default function Profile() {

    const {
        user: { username },
        getUserIssues,
        addUserIssue,
        issues
    } = useContext(UserContext)

    
    useEffect(() => {
        getUserIssues()
    }, [])


    return (
        <>
        <div className="profile">
            <h1>Welcome {username}! This is your private portal</h1>
            <h3>Post your Issue</h3>
            <IssueForm addUserIssue={addUserIssue} />
            
</div>

            <div className="topics">
               <center> <h3>Issues you care about</h3></center>
                <IssueList issues={issues} />
            </div>
            </>
       
    )
}