import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      name: '',
      link: '',
      location: '',
      about: '',
      photo: '',
      posts: [],
      selectedNavButton: '',
      page: '',
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    this.handleAppState = this.handleAppState.bind(this);
  }

  componentDidMount() {
    axios.get(`/users/${this.state.userId}`)
      .then(res => {
        const { name, link, location, about, photo } = res.data;
        this.setState({
          name,
          link,
          location,
          about,
          photo,
        })
        axios.get(`/sets/${this.state.userId}`)
          .then(res => {
            res.data.forEach(post => {
              post.date = `${post.date.slice(5,7)}/${post.date.slice(8,10)}/${post.date.slice(2,4)}`
            })
            this.setState({
              posts: res.data
            })
          })
          .catch(console.log)
      })
      .catch(console.log)
  }

  handleAppState(propertyObject) {
    this.setState(propertyObject)
  }

  handleNavButtonClick(e) {
    e.preventDefault()
    const { selectedNavButton } = this.state
    if (selectedNavButton !== '' && e.target.id === 'NavSearchButton') {
      document.getElementById('NavProfileButton').classList.remove('SelectedNavButton')
      this.setState({
        selectedNavButton: '',
        page: ''
      })
    } else {
      document.getElementById('NavProfileButton').classList.add('SelectedNavButton')  
      this.setState({
        selectedNavButton: e.target.id
      })
    }
  }

  render() {
    const { userId, name, link, location, about, photo, posts, selectedNavButton, page } = this.state;
    const userInfo = { userId, name, link, location, about, photo, posts }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} appState={ this.state } handleAppState={this.handleAppState}/>
        <Content selectedNavButton={selectedNavButton} userInfo={userInfo} page={page} handleAppState={this.handleAppState}/>
      </div>
    )
  }
}

export default App;