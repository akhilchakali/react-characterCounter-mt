import './App.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

// Replace your code here

class App extends Component {
  state = {list: [], li: ''}

  changed = event => {
    this.setState({li: event.target.value})
  }

  clicked = () => {
    const {li} = this.state
    this.setState(prevState => ({list: [...prevState.list, li], li: ''}))
  }

  render() {
    const {li, list} = this.state
    return (
      <form>
        <div>
          <h1>Count the characters like a Boss...</h1>

          {list.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {list.map(each => (
                <li key={each}>
                  <p>
                    {each}: {each.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h1>Character Counter</h1>
          <input
            type="text"
            onChange={this.changed}
            value={li}
            placeholder="Enter the Characters here"
          />
          <button type="button" onClick={this.clicked}>
            Add
          </button>
        </div>
      </form>
    )
  }
}

export default App
