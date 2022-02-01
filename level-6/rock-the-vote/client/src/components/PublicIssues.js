import React, {useContext, useState, useEffect} from "react";
import { UserContext } from "../context/UserProvider";
import { CommentContext } from "../context/CommentProvider";
import CommentForm from "../forms/CommentForm.js"
import Comment from "./Comment.js"
import axios from "axios"
import swal from 'sweetalert';


export default function PublicIssues(props){

const {deleteComment, submitComment}= useContext(CommentContext)

  const userAxios = axios.create()

  userAxios.interceptors.request.use(config => {
      const token = localStorage.getItem("token")
      config.headers.Authorization = `Bearer ${token}`
      return config
  })

    const { addLikes, addDislikes, user: {_id} } = useContext(UserContext)
    const { title, likes, dislikes, votedUser, description } = props
    const [newLikes, setNewLikes ] = useState(likes)
    const [newDislike, setNewDislike] = useState(dislikes)
    const [hasVoted, setHasVoted] = useState(false)
    const [usersWhoHaveVoted, setUsersWhoHaveVoted] = useState(votedUser)


    const [userComments, setUserComments] = useState([])
    const [userComment, setUserComment] = useState("")
    const [commentToggle, setCommentToggle] = useState(false)
    const [allComments, setAllComments]=useState([])
    const [currentIssue, setCurrentIssue]=useState([])

  

// const {getAllComments, submitComment, deleteComment}= useContext(CommentContext)


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


      function getAllComments() {
        userAxios.get(`/api/comment/${_id}`)
        .then(res => {
            setUserComments(res.data)
            console.log(res.data)
        }
        )
        .catch(err => console.log(err))
    }


   
  function getIssueById(id){
    userAxios.get(`/api/issue/${id}`)
      .then(res => {
        setCurrentIssue(res.data)
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

      
      useEffect(() => {
        getAllComments()
        
      }, [deleteComment, submitComment])

   

    //   function submitComment(newComment, issueId) {
    //     userAxios.post(`/api/comment/${issueId}`, newComment)
    //         .then(res => {
    //             setUserComments(prevState => [...prevState, res.data])
    //             // setAllComments(prevState=> [...prevState, res.data])
    //         })
    //         .catch(err => console.log(err))
    //     setUserComment("")
    //     getAllComments()

       

    // }
    // function deleteComment(commentId) {
    //     userAxios.delete(`/api/comment/${commentId}`)
    //         .then(res => setUserComments(prevState => prevState.filter(comment => comment._id !== commentId)))
    //         .catch(err => console.log(err))
    //         getAllComments()
    // }





return(




!commentToggle ?
<div className="pissue">

<h4>Issue Topic:</h4> {title} <br/>
<h4>Issue Description: </h4>{description}<br/>


    <button style={{backgroundColor:"green"}} disabled={hasVoted} onClick={() => AuthVoterLike()}>Like </button> {newLikes} 
   <button style={{backgroundColor:"#EF3054"}} disabled={hasVoted} onClick={() => AuthVoterDislike() }>Dislike   </button> {newDislike}
   <button onClick={() => setCommentToggle(prevToggle => !prevToggle)}>View Comments</button>

   </div>
   
   :
   <div className="comment">
                <CommentForm _id={_id} submitComment={submitComment}/>
                {userComments.map(comment => <Comment key={comment._id} userComments={userComments} {...comment}  deleteComment={deleteComment} />)}
                <button onClick={() => setCommentToggle(prevToggle => !prevToggle)}>Close Comments</button>
            </div>


)
}