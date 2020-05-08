import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Sitcom',
      selectedNavButton: ''
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
  }

  handleNavButtonClick(e) {
    e.preventDefault()
    if (this.state.selectedNavButton !== '') {
      document.getElementById(this.state.selectedNavButton).classList.remove('SelectedNavButton')
    }
    if (this.state.selectedNavButton !== e.target.id) {
      e.target.classList.add('SelectedNavButton')
      this.setState({
        selectedNavButton: e.target.id
      })
    } else {
      this.setState({
        selectedNavButton: ''
      })
    }
  }

  render() {
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} user={this.state.user}/>
        <Content selectedNavButton={this.state.selectedNavButton}/>
      </div>
    )
  }
}

export default App;