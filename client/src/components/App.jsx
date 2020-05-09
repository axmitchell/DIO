import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 1,
      name: '',
      link: '',
      location: '',
      about: '',
      photo: '',
      selectedNavButton: ''
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/user/${this.state.user}`)
      .then(res => {
        const { name, link, location, about, photo } = res.data;
        this.setState({
          name,
          link,
          location,
          about,
          photo
        })
      })
      .catch(console.log)
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
    const { name, link, location, about, photo } = this.state;
    const userInfo = {
      name, 
      link,
      location,
      about,
      photo,
    }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} user={this.state.name}/>
        <Content selectedNavButton={this.state.selectedNavButton} userInfo={userInfo}/>
      </div>
    )
  }
}

export default App;