import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 2,
      name: '',
      link: '',
      location: '',
      about: '',
      photo: '',
      selectedNavButton: '',
      posts: [],
      page: '',
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
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
          photo,
        })
      })
      .catch(console.log)
  }

  handlePageChange(page) {
    this.setState({
      page,
    })
  }

  handleNavButtonClick(e) {
    e.preventDefault()
    if (this.state.selectedNavButton !== '') {
      document.getElementById(this.state.selectedNavButton).classList.remove('SelectedNavButton')
      this.handlePageChange('')
    }
    if (this.state.selectedNavButton !== e.target.id) {
      e.target.classList.add('SelectedNavButton')
      this.setState({
        selectedNavButton: e.target.id,
        page: ''
      })
    } else {
      this.setState({
        selectedNavButton: '',
        page: ''
      })
    }
  }

  render() {
    // const { user, name, link, location, about, photo, posts, selectedNavButton, page } = this.state;
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} user={this.state.name}/>
        <Content selectedNavButton={this.state.selectedNavButton} userInfo={this.state} handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}

export default App;