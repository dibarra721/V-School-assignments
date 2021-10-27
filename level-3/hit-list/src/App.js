import React, {Component} from "react"
import "./style.css"

 
  class App extends Component {
    state = {
      hitList:[]
    

    }

    componentDidMount() {
      fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
          .then(response => response.json())
          .then(data => {
              this.setState({
                  hitList: data
                
                  })  
              console.log(data)
          })
  }
    

render() {

const list= this.state.hitList.map((name,index) => {
return (
  <div className="hitList" key={index}>
    <p className="name">Name:{name.name}</p>
    <img className="image"src={name.image} alt=""></img>
    </div>
)

})
console.log(list)

  return (
    <div>
    
   <h1>The hit List</h1>

   <div className="theList">{list}
    </div>
    </div>
  )
}

    
  }

  

export default App
