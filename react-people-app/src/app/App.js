import React, { Component } from 'react';
import '../App.css';
import { fetchUsers } from "../services/UserServices";
import { Header } from "./partials/Header";
import { SearchBar } from "../app/partials/SearchBar";
import { Footer } from "./partials/Footer";
import { UserList } from "./list/UserList";
import { CardList } from './card/CardList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      listView: true,
      searchBarInputValue: ""
    }
  }

  loadUsers() {
    fetchUsers()
      .then((usersData) => {
        localStorage.setItem('usersData', JSON.stringify(usersData));
        this.setState({
          users: usersData
        })
      })
  }

  handleClick = () => {
    localStorage.setItem('listView', !this.state.listView)
    this.setState((prevState) => ({
      listView: !prevState.listView,
    }));
  }

  handleComponentSwitch() {
    return this.state.listView ? 
    <UserList userList={this.state.users} searchBarInputValue={this.state.searchBarInputValue}/> 
    : 
    <CardList userList={this.state.users} searchBarInputValue={this.state.searchBarInputValue}/>
  }

  refreshPage() {
    this.loadUsers()
  }

  handleSearchBar = (event) => {
    this.setState({
      searchBarInputValue: event.target.value
    })

  }

  handleData() {
    if (this.loadUsers()) {
      const usersData = JSON.parse(localStorage.getItem('usersData'));
      this.setState({
        users: usersData,
      })
    } else {
      this.loadUsers();
    }

    if (localStorage.getItem('listView')) {
      this.setState({
        listView: JSON.parse(localStorage.getItem('listView'))
      })
    }
  }

  componentDidMount() {
    this.handleData()
  }

  render() {
    return (
      <React.Fragment>
        <Header title={"React people app"}
          state={this.state.listView}
          handleClick={this.handleClick}
          refreshPage={this.refreshPage}
          search={this.handleSearchBar}
          handleSearchBar={this.handleSearchBar} />

        <SearchBar handleSearchBar={this.handleSearchBar} searchBarInputValue={this.state.searchBarInputValue} />
        {this.handleComponentSwitch()}
        <Footer />
      </React.Fragment>
    );
  }


}

export default App;
