import React, {Component} from "react"
import './App.css';
import axios from 'axios';

class RandomColor extends Component{
  state ={
    color:[{hex:""}]
  }

  componentDidMount() {
    this.newColor ()
  }
  handleChange = () => {
    this.newColor ()
  }

  newColor = () => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(response => response.data)
    .then(data => {
      this.setState({
        color: data.colors,
      })
    })
  }

  render () {

    return(
      <div style={{backgroundColor : `#${this.state.color[0].hex}`, height:"550px", display:"block"}}>
        <button onClick={this.handleChange}>Click to Change Color</button>
      </div>
    )
  }





}






export default RandomColor;
