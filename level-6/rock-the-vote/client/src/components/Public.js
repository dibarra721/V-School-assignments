import React, {useContext, useEffect, useState} from "react"
import PublicIssues from "./PublicIssues"
import { UserContext } from "../context/UserProvider"



export default function Public(){


  const { allIssues, getAllIssues} = useContext(UserContext)
  const sortIssues = allIssues.sort((a,b) => b.likes - a.likes)


  useEffect(() => {
    getAllIssues()
}, [])






  return(
    <>

<div className="publicIssues">
<center>
    <h1>Here is a list of all the Issues Submitted by our Community.</h1><br/> <h2>You can vote on an issue once <br/>You can also add a comment </h2></center>
{sortIssues.map(issue => <PublicIssues {...issue} key={issue._id} />)}





</div>

</>


  )
}