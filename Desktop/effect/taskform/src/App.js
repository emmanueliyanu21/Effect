import React, { Component } from 'react'

export class App extends Component {

  state = {
    countries: []
  }

  addCountry() {
    this.setState({ countries: [...this.state.countries, ""] });
  }

  handleChange(e, index) {
    this.state.countries[index] = e.target.value

    //set the changed state
    this.setState({ countries: this.state.countries })
  }

  handleRemove(index) {
    //remove the index field
    this.state.countries.splice(index, 1)
    console.log(this.state.countries, "sss");

    //update the state
    this.setState({ countries: this.state.countries })
  }

  render() {
    return (
      <div>
        <h2>The form</h2>
        <label>Address</label>
        {
          this.state.countries.map((country, index) => {
            return (
              <div key={index}>
                <input onChange={(e) => this.handleChange(e, index)} value={country} />

                <button onClick={() => this.handleRemove(index)}>Remove</button>
              </div>
            )
          })
        }
        <hr />
        <button onClick={(e) => this.addCountry(e)}>Add Country</button>
      </div>
    )
  }
}

export default App