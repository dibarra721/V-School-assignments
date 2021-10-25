import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      allNames: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState((prevState) => {
      return {
        firstName: "",
        allNames: [...prevState.allNames, this.state.firstName],
      }
    })
  }

  render() {
    const nameList = this.state.allNames.map((name) => {
      return <li>{name}</li>
    });

    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>

          <h3>{this.state.firstName} Current Name </h3>
          <ul className="list">
            <h1>Previous Names </h1>
            {nameList}
          </ul>
        </form>
      </main>
    );
  }
}

export default App;
