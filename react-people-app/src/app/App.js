import React, { Component } from 'react';
import '../App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
//import { UserList } from './list/UserList';
import { CardList } from './card/CardList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title={"React people app"} />
        <CardList />
        <Footer />
      </React.Fragment>
    );
  }


}

export default App;
