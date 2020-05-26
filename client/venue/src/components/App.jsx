import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 2,
      name: '',
      link: '',
      location: '',
      about: '',
      photo: '',
      posts: [],
      selectedNavButton: '',
      page: '',
      postPhoto: '',
      postLocation: '',
      postDate: '',
      postDescription: ''
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    this.handleAppState = this.handleAppState.bind(this);
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.handlePostViewState = this.handlePostViewState.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
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
        axios.get(`/shows/${this.state.userId}`)
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
    if (propertyObject.page === '') {
      propertyObject = {
        page: '',
        postPhoto: '',
        postLocation: '',
        postDate: '',
        postDescription: ''
      };
    } 
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

  handlePostFormChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handlePostViewState(property) {
    const { photo, location, date, description } = property;
    this.setState({
      postPhoto: photo,
      postLocation: location,
      postDate: date,
      postDescription: description,
    })
  }

  handlePostSubmit(e) {
    e.preventDefault()
    const { postPhoto, postLocation, postDate, postDescription } = this.state;
    if (postPhoto && postLocation && postDate && postDescription) {
      let convertedDate = new Date(postDate.slice(0,6) + '20' + postDate.slice(6,8));
      const venuePost = {
        userId: Number(this.state.userId),
        name: this.state.name,
        link: this.state.link,
        photo: postPhoto,
        location: postLocation,
        date: convertedDate,
        description: postDescription,
      }
      axios.post('/shows', venuePost) 
        .then(
          axios.get(`/shows/${Number(this.state.userId)}`)
            .then(res => {
              res.data.forEach(post => {
                post.date = `${post.date.slice(5,7)}/${post.date.slice(8,10)}/${post.date.slice(2,4)}`;
              })
              this.setState({
                posts: res.data,
                postPhoto: '',
                postLocation: '',
                postDate: '',
                postDescription: '',
                selectedNavButton: 'NavPostButton',
                page: ''
              })
            })
            .catch(console.log)
        )
        .catch(console.log)
    }
  }

  render() {
    const { userId, name, link, location, about, photo, posts, selectedNavButton, page, postPhoto, postDescription, postDate, postLocation } = this.state;
    const userInfo = { userId, name, link, location, about, photo, posts }
    const postInfo = { postPhoto, postDescription, postDate, postLocation }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} appState={ this.state } handleAppState={this.handleAppState} handlePostSubmit={this.handlePostSubmit}/>
        <Content selectedNavButton={selectedNavButton} userInfo={userInfo} page={page} handleAppState={this.handleAppState} handlePostFormChange={this.handlePostFormChange} postInfo={postInfo} handlePostSubmit={this.handlePostSubmit} handlePostViewState={this.handlePostViewState} />
      </div>
    )
  }
}

export default App;