import React, {Component} from "react"
// import Badge from "./Badge"
import "./Style.css"


class App extends Component {
    constructor (props){
    super ()
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
          const newItem= {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        placeOfBirth: this.state.placeOfBirth,
        phone:this.state.phone,
        favoriteFood: this.state.favoriteFood,
        about: this.state.about,}

        this.setState((prevState) => {
            return {
        allBadge:[...prevState.allBadge,
        newItem
    ],
      }
      
        })

        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone:"",
            favoriteFood: "",
            about: "",
          });
}

render () {

    const badgeListComponent = this.state.allBadge.map((name) => {
    
        return (
            <div className="results">
            <li>
            First Name:{name.firstName}<br/>
            Last Name:{name.lastName}<br/>
            Email:{name.email}<br/>
            Place Of Birth:{name.placeOfBirth}<br/>
            Phone:{name.phone}<br/>
            FavoriteFood:{name.favoriteFood}<br/>
            About:{name.about}<br/>
          </li>
        </div>
        )
    })

    return (
    <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
           First Name:
            <input
            placeholder="first name"
            minLength={"3"}
            type={"text"}
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            required="Required"
                />
            <br/>
            Last Name:
            <input
            placeholder="last name"
            minLength={"3"}
            type={"text"}
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            required="Required"
            />
            <br/>
            Email:
            <input
              type="text"  minLength={"3"}
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required="Required"
            />
            <br/>
            Place of Birth :
            <input
            type="text"  minLength={"3"}
            placeholder="birth of place"
            name="placeOfBirth"
            value={this.state.placeOfBirth}
            onChange={this.handleChange}
            required="Required"
            />
            <br/>

            Phone:
            <input
            type="number" minLength={"10"}
            placeholder="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required="Required"
            />
            <br/>
            Favorite Food:
            <input
            type="text"  minLength={"3"}
            placeholder="favorite food"
            name="favoriteFood"
            value={this.state.favoriteFood}
            onChange={this.handleChange}
            required="Required"

            />
            <br/>
            About:
            <textarea
            type="text" minLength={"3"}
            placeholder="about"
            name="about"
            value={this.state.about}
            onChange={this.handleChange}
            required="Required"
           textarea/>
            <br/>
            <button >Submit</button>
        </form>
<div className="results">
        <h4>{this.state.firstName}<br/>
        {this.state.lastName}<br/>
        {this.state.email}<br/>
        {this.state.phone}<br/>
        {this.state.favoriteFood}<br/>
        {this.state.placeOfBirth}<br/>
        {this.state.about}<br/></h4>

        {badgeListComponent}
</div>
    
    </div>

    )
}



}

export default App