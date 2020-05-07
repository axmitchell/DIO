import React, { Component } from 'react';
import Menu from './Menu.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div id='main'>
        <Menu />
        <Content />
      </div>
    )
  }
}

export default App;