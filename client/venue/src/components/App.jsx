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
      postDescription: '',
      postId: ''
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.handlePostView = this.handlePostView.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.getShows = this.getShows.bind(this);
    this.clearStateForPostPage = this.clearStateForPostPage.bind(this);
  }

  componentDidMount() {
    // const { userId } = this.state;
    // axios.get(`/users/${userId}`)
    //   .then(({ data }) => {
    //     this.setState(data)
    //     axios.get(`/shows/${userId}`)
    //       .then(({ data }) => {
    //         data.forEach(post => {
    //           post.date = `${post.date.slice(5,7)}/${post.date.slice(8,10)}/${post.date.slice(2,4)}`
    //         })
    //         this.setState({
    //           posts: data
    //         })
    //       })
    //       .catch(console.log)
    //   })
    //   .catch(console.log)
    const { userId } = this.state;
    axios.get(`/users/${userId}`)
      .then(({ data }) => {
        this.setState(data)
        this.getShows()
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

  handlePostView(post) {
    const { photo, date, description, id, user } = post;
    const { location } = user
    this.setState({
      postId: id,
      postPhoto: photo,
      postLocation: location,
      postDate: date,
      postDescription: description,
    })
  }

  handlePostSubmit(e) {
    e.preventDefault()
    const { postPhoto, postLocation, postDate, postDescription } = this.state;
    if (postPhoto && postDate && postDescription) {
      let convertedDate = new Date(postDate.slice(0,6) + '20' + postDate.slice(6,8));
      const venuePost = {
        userId: Number(this.state.userId),
        photo: postPhoto,
        date: convertedDate,
        description: postDescription,
      }
      axios.post('/shows', venuePost) 
        .then(() => {
          this.getShows();
          this.clearStateForPostPage();
        })
        .catch(console.log)
    }
  }

  getShows() {
    axios.get(`/shows/${Number(this.state.userId)}`)
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
    axios.delete(`/shows/${Number(this.state.postId)}`)
      .then(() => this.getShows())
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