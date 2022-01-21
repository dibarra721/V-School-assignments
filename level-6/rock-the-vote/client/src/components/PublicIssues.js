import React, {useContext, useState} from "react";
import { UserContext } from "../context/UserProvider";
import swal from 'sweetalert';

export default function PublicIssues(props){

    const { addLikes, addDislikes, user: {_id} } = useContext(UserContext)
    const { title, likes, dislikes, votedUser, description } = props
    const [newLikes, setNewLikes ] = useState(likes)
    const [newDislike, setNewDislike] = useState(dislikes)
    const [hasVoted, setHasVoted] = useState(false)
    const [usersWhoHaveVoted, setUsersWhoHaveVoted] = useState(votedUser)
    console.log('usersWhoHaveVoted: ', usersWhoHaveVoted);



    function AuthVoterLike(){
        if(votedUser.includes(_id)) {
          swal("sorry", "You have already voted on the issue", "error");
        } else {
          addLike(props._id)
        }
      }
      function AuthVoterDislike(){
        if(votedUser.includes(_id)) {
          swal("sorry", "You have already voted on the issue", "error");
        } else {
          addDislike(props._id)
        }
      }
    
      function addLike(id){
        console.log('id: ', id);
        setNewLikes(prevCount => prevCount + 1)
        addLikes(id)
        setHasVoted(prevStatus => !prevStatus)
        setUsersWhoHaveVoted(prevState => [...prevState, _id])
      }
      function addDislike(id){
        setNewDislike(prevCount => prevCount + 1)
        addDislikes(id)
        setHasVoted(prevStatus => !prevStatus)
      }

return(


<>
<div className="pissue">

Issue Topic: {title} <br/>
Issue Descriptions: {description}



    <button disabled={hasVoted} onClick={() => AuthVoterLike()}>Like this Issue</button> {newLikes} 
   <button disabled={hasVoted} onClick={() => AuthVoterDislike() }>Dislike this Issue </button> {newDislike}
   
   </div>
 </>
)
}