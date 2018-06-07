import React, { Component } from 'react';
import '../App.css';
import { fetchUsers } from "../services/UserServices";
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { UserList } from "./list/UserList";
import { CardList } from './card/CardList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      listView: true
    }
  }

  loadUsers() {
    fetchUsers()
      .then((userList) => {
        this.setState({
          users: userList
        })
      })
  }

  handleClick = () => {
    this.setState((prevState) => ({
      listView: !prevState.listView,
    }));
  }

  handleComponentSwitch() {
    return this.state.listView ? <CardList userList={this.state.users}/> : <UserList userList={this.state.users}/>
  }

  componentDidMount() {
    this.loadUsers()
  }

  render() {
    return (
      <React.Fragment>
        <Header title={"React people app"} state={this.state.listView} handleClick={this.handleClick} loadUsers={this.loadUsers}/>
        {this.handleComponentSwitch()}
        <Footer />
      </React.Fragment>
    );
  }


}

export default App;
