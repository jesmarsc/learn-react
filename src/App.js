import React from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {

  state = {
    users: [
      { id: 1, name: 'James' },
      { id: 2, name: 'Jones' },
      { id: 3, name: 'Bones' }
    ],
    showUsers: false
  }

  deleteUser = index => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users: users });
  }

  changeName = (index, event) => {
    const user = { ...this.state.users[index] };
    user.name = event.target.value;

    const userList = [...this.state.users];
    userList[index] = user;
    this.setState({ users: userList })
  }

  changeAllNames = event => {
    const newName = event.target.value;
    const users = [...this.state.users];
    users.forEach(user => user.name = newName);
    this.setState({ users: users });
  }

  toggleAllNames = () => {
    this.setState({ showUsers: !this.state.showUsers })
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: 'pointer'
    }

    // PREPARE LIST
    let userList = null;
    if (this.state.showUsers) {
      userList = (
        <div>
          {this.state.users.map((user, index) => {
            return (
              <UserOutput
                key={user.id}
                onClick={this.deleteUser.bind(this, index)}
                onChange={this.changeName.bind(this, index)}
                name={user.name} />)
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    // BEGIN RENDER
    return (
      <div className="App">
        <UserInput onChange={this.changeAllNames} />
        <p>wow!</p>
        <button style={style} onClick={this.toggleAllNames}>Toggle Users</button>
        {userList}
      </div>
    );
  }
};

export default App;
