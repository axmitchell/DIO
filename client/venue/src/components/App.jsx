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
      postId: '',
      otherUserPosts: [],
      selectedSurfPost: 0,
      surfPostPhoto: '', 
      surfPostName: '', 
      surfPostUserLocation: '',
      surfPostLocation: '', 
      surfPostLink: '', 
      surfPostDate: '', 
      surfPostDescription: '',
      postFront: true,
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.handlePostView = this.handlePostView.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.getShows = this.getShows.bind(this);
    this.getSets = this.getSets.bind(this);
    this.clearStateForPostPage = this.clearStateForPostPage.bind(this);
    this.handleSurfPostView = this.handleSurfPostView.bind(this);
    this.flipPost = this.flipPost.bind(this);
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

  getSets() {
    axios.get(`/sets`)
      .then(res => {
        const { date } = res.data[0];
        this.setState({
          otherUserPosts: res.data,
          surfPostPhoto: res.data[0].photo, 
          surfPostName: res.data[0].user.name, 
          surfPostLocation: res.data[0].location, 
          surfPostUserLocation: res.data[0].user.location,
          surfPostLink: res.data[0].user.link, 
          surfPostDate: `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
          surfPostDescription: res.data[0].description,
        })
      })
      .catch(console.log)
  }

  flipPost(e) {
    if (e.target.id && e.target.id !== 'PostFormUserInfoName') {
      this.setState({
        postFront: !this.state.postFront
      })
    }
  }

  handleSurfPostView(e) {
    const { selectedSurfPost, otherUserPosts } = this.state
    let nextPost;
    if (e.target.id === 'NextSet' && selectedSurfPost < otherUserPosts.length - 1) {
      nextPost = selectedSurfPost + 1;
    } else if (e.target.id === 'PreviousSet' && selectedSurfPost > 0) {
      nextPost = selectedSurfPost - 1;
    }
    const { date } = otherUserPosts[nextPost]
    this.setState({
      selectedSurfPost: nextPost,
      surfPostPhoto: otherUserPosts[nextPost].photo, 
      surfPostName: otherUserPosts[nextPost].user.name, 
      surfPostLocation: otherUserPosts[nextPost].user.location, 
      surfPostUserLocation: otherUserPosts[nextPost].user.location,
      surfPostLink: otherUserPosts[nextPost].user.link, 
      surfPostDate: `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
      surfPostDescription: otherUserPosts[nextPost].description,
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
    const { userId, name, link, location, about, photo, posts, selectedNavButton, page, postPhoto, postDescription, postDate, postLocation, surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription, otherUserPosts, postFront } = this.state;
    const userInfo = { userId, name, link, location, about, photo, posts }
    const postInfo = { postPhoto, postDescription, postDate, postLocation }
    const currentSurfPost = { surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} appState={ this.state } handlePage={this.handlePage} handlePostSubmit={this.handlePostSubmit} handlePostDelete={this.handlePostDelete}/>
        <Content selectedNavButton={selectedNavButton} userInfo={userInfo} page={page} handlePage={this.handlePage} handlePostFormChange={this.handlePostFormChange} postInfo={postInfo} handlePostSubmit={this.handlePostSubmit} handlePostView={this.handlePostView} handleSurfPostView={this.handleSurfPostView} currentSurfPost={currentSurfPost} otherUserPosts={otherUserPosts} flipPost={this.flipPost} postFront={postFront}/>
      </div>
    )
  }
}

export default App;