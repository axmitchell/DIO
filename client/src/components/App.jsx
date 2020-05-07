import React, { Component } from 'react';
import Menu from './Menu.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButton: ''
    }
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
  }

  handleMenuButtonClick(e) {
    e.preventDefault()
    if (this.state.currentButton !== '') {
      document.getElementById(this.state.currentButton).classList.remove('currentButton')
    }
    e.target.classList.add('currentButton')
    this.setState({
      currentButton: e.target.id
    })
  }

  render() {
    return(
      <div id='main'>
        <Menu handleMenuButtonClick={this.handleMenuButtonClick}/>
        <Content />
      </div>
    )
  }
}

export default App;