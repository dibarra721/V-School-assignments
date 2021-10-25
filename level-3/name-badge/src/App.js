import React, {Component} from "react"
// import Badge from "./Badge"
import "./Style.css"


class App extends Component {
    constructor (props){
    super (props)
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone:"",
        favoriteFood: "",
        about: "",
        allBadge:[]
        
 }
 this.handleChange = this.handleChange.bind(this)
 this.handleSubmit = this.handleSubmit.bind(this);

}
handleChange(event) {
    event.preventDefault();
    const {name, value} = event.target
    this.setState ({
        [name]: value
    })
}
handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone:'',
        favoriteFood: "",
        about: "",
        allBadge:[...prevState.allBadge]
      }
    })
}

render () {

    const badgeListComponent = this.state.allBadge.map((name) => {
    
        return (
            <li>
            firstName:{name.firstName}
            lastName:{name.lastName}
            email:{name.email}
            placeOfBirth:{name.placeOfBirth}
            phone:{name.phone}
            favoriteFood:{name.favoriteFood}
            about:{name.about}
          </li>
        
        )
    })

    return (
    <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
           
            <input
            placeholder="first name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            required="Required"


            />
            <br/>
            <input
            placeholder="last name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            required="Required"


            />
            <br/>
            <input
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required="Required"


            />
            <br/>
            <input
            placeholder="birth of place"
            name="placeOfBirth"
            value={this.state.placeOfBirth}
            onChange={this.handleChange}
            required="Required"


            />
            <br/>

            <input
            placeholder="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required="Required"


            />
            <br/>

            <input
            placeholder="favorite food"
            name="favoriteFood"
            value={this.state.favoriteFood}
            onChange={this.handleChange}
            required="Required"

            />
            <br/>


            <input
            placeholder="about"
            name="about"
            value={this.state.about}
            onChange={this.handleChange}
            required="Required"


            />
            <br/>
            <button>Submit</button>
        </form>

        <h4>{this.state.firstName}<br/>
        {this.state.lastName}<br/>
        {this.state.email}<br/>
        {this.state.phone}<br/>
        {this.state.favoriteFood}<br/>
        {this.state.placeOfBirth}<br/>
        {this.state.about}<br/></h4>

        {badgeListComponent}

    
    </div>

    )
}



}

export default App