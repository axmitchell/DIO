import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 2,
      type: '',
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
        const { name, link, location, about, photo, type } = res.data;
        this.setState({
          name,
          link,
          location,
          about,
          photo,
          type,
        })
        let postRoute
        type === 'band' ? postRoute = 'sets' : postRoute = 'shows'
        axios.get(`/${postRoute}/${this.state.userId}`)
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
    const { selectedNavButton } = this.state
    e.preventDefault()
    if (selectedNavButton !== '') {
      document.getElementById(selectedNavButton).classList.remove('SelectedNavButton')
      this.setState({page: ''})
    }
    if (selectedNavButton !== e.target.id) {
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
    const { userId, name, link, location, about, photo, posts, selectedNavButton, page, type } = this.state;
    const userInfo = { userId, name, link, location, about, photo, posts, type }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} appState={ this.state } handleAppState={this.handleAppState}/>
        <Content selectedNavButton={selectedNavButton} userInfo={userInfo} page={page} handleAppState={this.handleAppState}/>
      </div>
    )
  }
}

export default App;