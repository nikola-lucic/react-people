import React, { Component } from 'react';
import '../App.css';
import { fetchUsers } from "../services/UserServices";
import { Loader } from "./partials/Loader";
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
      searchBarInputValue: "",
      loader: true
    }
  }

  loadUsers() {
    this.setState({
      loader: true
    })

    fetchUsers()
      .then((usersData) => {
        localStorage.setItem('usersData', JSON.stringify(usersData));
        this.setState({
          users: usersData,
          loader: false
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
      <UserList userList={this.state.users} searchBarInputValue={this.state.searchBarInputValue} />
      :
      <CardList userList={this.state.users} searchBarInputValue={this.state.searchBarInputValue} />
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
        loader: false
      })
    } else {
      this.loadUsers();
      this.setState({
        loader: true
      })
    }

    if (localStorage.getItem('listView')) {
      this.setState({
        listView: JSON.parse(localStorage.getItem('listView'))
      })
    }
  }

  setLoader() {
    this.setState({
      loader: true
    })
  }

  handleComponents() {
    return this.state.loader ? <Loader /> : this.handleComponentSwitch()
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
        {this.handleComponents()}
        <Footer />
      </React.Fragment>
    );
  }


}

export default App;
