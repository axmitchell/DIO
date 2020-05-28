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
      postPhoto: '',
      postLocation: '',
      postDate: '',
      postDescription: '',
      postId: ''
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.handlePostView = this.handlePostView.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.getSets = this.getSets.bind(this);
    this.clearStateForPostPage = this.clearStateForPostPage.bind(this);
  }

  componentDidMount() {
    const { userId } = this.state;
    axios.get(`/users/${userId}`)
      .then(({ data }) => {
        this.setState(data)
        this.getSets()
      })
      .catch(console.log)
  }

  handlePage(page) {
    if (page === '') {
      this.setState({
        page: '',
        postId: '',
        postPhoto: '',
        postLocation: '',
        postDate: '',
        postDescription: ''
      });
    } else {
      this.setState({ page })
    }
  }

  handlePostView(post) {
    const { photo, location, date, description, id } = post;
    this.setState({
      postId: id,
      postPhoto: photo,
      postLocation: location,
      postDate: date,
      postDescription: description,
    })
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

  handlePostSubmit(e) {
    e.preventDefault()
    const { postPhoto, postLocation, postDate, postDescription } = this.state;
    if (postPhoto && postLocation && postDate && postDescription) {
      let convertedDate = new Date(postDate.slice(0,6) + '20' + postDate.slice(6,8));
      const bandPost = {
        userId: Number(this.state.userId),
        userLocation: this.state.location,
        name: this.state.name,
        link: this.state.link,
        photo: postPhoto,
        location: postLocation,
        date: convertedDate,
        description: postDescription,
      }
      axios.post('/sets', bandPost) 
        .then(() => {
          this.getSets();
          this.clearStateForPostPage();
        })
        .catch(console.log)
    }
  }

  getSets() {
    axios.get(`/sets/${Number(this.state.userId)}`)
    .then(res => {
      res.data.forEach(post => {
        post.date = `${post.date.slice(5,7)}/${post.date.slice(8,10)}/${post.date.slice(2,4)}`;
      })
      this.setState({
        posts: res.data,
      })
    })
    .catch(console.log)
  }

  handlePostDelete() {
    axios.delete(`/sets/${Number(this.state.postId)}`)
      .then(() => {
        this.getSets(); 
        this.clearStateForPostPage()
      })
      .catch(console.log);
  }

  clearStateForPostPage() {
    this.setState({
      postPhoto: '',
      postLocation: '',
      postDate: '',
      postDescription: '',
      selectedNavButton: 'NavPostButton',
      page: ''
    })
  }

  render() {
    const { userId, name, link, location, about, photo, posts, selectedNavButton, page, postPhoto, postDescription, postDate, postLocation } = this.state;
    const userInfo = { userId, name, link, location, about, photo, posts }
    const postInfo = { postPhoto, postDescription, postDate, postLocation }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} appState={ this.state } handlePage={this.handlePage} handlePostSubmit={this.handlePostSubmit} handlePostDelete={this.handlePostDelete}/>
        <Content selectedNavButton={selectedNavButton} userInfo={userInfo} page={page} handlePage={this.handlePage} handlePostFormChange={this.handlePostFormChange} postInfo={postInfo} handlePostSubmit={this.handlePostSubmit} handlePostView={this.handlePostView} />
      </div>
    )
  }
}

export default App;