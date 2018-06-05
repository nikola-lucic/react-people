import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header title={"React people app"}/>
      <UserList/>
      <Footer />
    </React.Fragment>
    );
  }
}

export default App;
