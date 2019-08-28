import React, { Component } from 'react';
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

  deleteUser = () => {
    
  }

  changeName = event => {
    const newName = event.target.value;

    this.setState(prevState => {
      let allUsers = prevState.users.slice();
      for (let user of allUsers) {
        user.name = newName;
      }
      return { users: allUsers };
    })
  }

  toggleAllNames = () => {
    this.setState({
      showUsers: !this.state.showUsers
    })
  }

  render() {

    let userList = null;
    if (this.state.showUsers) {
      userList = (
        <div>
          {this.state.users.map(user => <UserOutput name={user.name} />)}
        </div>
      )
    }

    return (
      <div className='App'>
        <UserInput onChange={this.changeName.bind(this)} toggle={this.toggleAllNames.bind(this)} />
        {userList}
      </div>
    );
  }
};

export default App;
