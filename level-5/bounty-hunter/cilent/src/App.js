import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from './components/Bounty.js'
import BountyForm from "./components/BountyForm.js"
import "./App.css"


export default function App() {
const [bounties, setBounties] =useState([])

function getBounties(){
  axios.get("/bounties")
  .then(res => setBounties(res.data))
  .catch(err => console.log(err.response.data.errMsg))

}


function addBounty(newBounty) {
  axios.post("/bounties", newBounty)
  .then (res => {
    setBounties(prevBounties => [...prevBounties, res.data])
    console.log(bounties)
})
  .catch(err => console.log(err))
}


function deleteBounty(bountyId) {
  axios.delete(`./bounties/${bountyId}`,)
  .then(res => {
    setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !==  bountyId))
  })
  .catch(err => console.log(err))
}

function handleFilter(e){
  if(e.target.value === "reset") {
    getBounties()
  }
  axios.get(`/bounties/search/type?type=${e.target.value}`)
  .then(res => setBounties(res.data))
  .catch(err => console.log(err))
}



useEffect(() => {
  getBounties()
}, [])




  return ( 

    <>
    
    <div className="bountyContainer">
      <BountyForm
        submit={addBounty} 
        btnText="Add Bounty"/>

    <h4>Filter by Type</h4>
    <select onChange={handleFilter} className="filter">
    <option value="reset">All Bounties</option>
    <option value="Jedi">Jedi</option>
    <option value="Sith">Sith</option>

    </select>



    </div>
    <div className="bounties">
        {bounties.map(bounty => 
        <Bounty
          {...bounty}
          key={bounty._id}
          deleteBounty={deleteBounty} />
        )}

      </div>
      </>
  )
  
}