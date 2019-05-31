import React, { Component } from 'react';
import logo from "./logo.svg";
import './App.css';

/*
class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
*/

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {posts: ""};
  }


  callAPI() {
    fetch('http://localhost:3001/posts')
      .then(res => res.text())
      .then(posts => this.setState({posts}))
      .catch(err => err);
  }

  componentDidMount() {
      this.callAPI();
  }



  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Test App</h1>
                  <h2 className="App-intro">{this.state.posts}</h2>
              </header>
              <body>
                <form>
                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </body>
          </div>
      );
  }
}

export default App;
