import React, { Component } from 'react';
import '../App.css';
import { fetchUsers } from "../services/UserServices";
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { UserList } from './list/UserList';
import { CardList } from './card/CardList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listView: false,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      listView: !prevState.listView
    }));
  }

  handleComponentSwitch() {
    return this.state.listView ? <CardList /> : <UserList />
  }

  render() {
    const handleComponent = this.handleComponentSwitch();
    return (
      <React.Fragment>
        <Header title={"React people app"} state={this.state.listView} handleClick={this.handleClick} />
        {handleComponent}
        <Footer />
      </React.Fragment>
    );
  }


}

export default App;
