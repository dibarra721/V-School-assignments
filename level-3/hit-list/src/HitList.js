import React, { Component } from "react";
import "./style.css";

class HitList extends Component {
  state = {
    hitList: []
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hitList: data
        });
        console.log(data)
      })
  }

  render() {
    const list = this.state.hitList.map((name, index) => {
      return (
        
        <div className="hitList" key={index}>
          <p className="name">Name:{name.name}</p>
          <img className="image" src={name.image} alt=""></img>
        </div>
        
      )
    })
  
    return (
    
    <><div className="container">
    <header className="header">
        <h1>Don Carleone's Hit List</h1>
      </header>

          <div className="theList">{list}</div>
          </div>
          </>
        
    );
  }
}

export default HitList
