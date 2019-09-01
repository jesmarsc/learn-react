import React, { Fragment } from 'react';
import './App.css';

import Cockpit from '../components/Cockpit/Cockpit'
import Users from '../components/Users/Users';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    users: [
      { id: 1, name: 'James' },
      { id: 2, name: 'Jones' },
      { id: 3, name: 'Bones' }
    ],
    showUsers: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');

    // PREPARE LIST
    let userList = null;
    if (this.state.showUsers) {
      userList = <Users users={this.state.users} onChange={this.changeName} onClick={this.deleteUser} />;
    }

    // BEGIN RENDER
    return (
      <Fragment>
        {userList}
        <Cockpit length={this.state.users.length} showUsers={this.state.showUsers} onClick={this.toggleAllNames} />
      </Fragment>
    );
  }
};

export default App;
