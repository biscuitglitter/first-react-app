import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        task: "",
        array: []
      }
  }

  handleInputChange = event => {
      this.setState( {
          task: event.target.value
      })
  }

  handleSubmit = event => {
      event.preventDefault()
  }

  pushToArray = () => {
    this.state.array.push(this.state.task)
    console.log(`${this.state.array}`)
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>task</label>
                  <input type="text" value={this.state.task} onChange={this.handleInputChange} />
              </div>
              <button type="submit" onClick={this.pushToArray}>Submit</button>
        </form>
        </div>
          )       
  }
}
export default App;
