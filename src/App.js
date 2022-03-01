import './App.css';
import React from "react";
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      task: "",
      array: []
    }
  }

  handleInputChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      task: ""
    });
  }

  pushToArray = () => {
    if (this.state.task === "") return
    this.state.array.push(this.state.task)
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
        <Overview dataFromParent={this.state.array} />
      </div>
    )
  }
}
export default App;
