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
      postId: '',
      otherUserPosts: [],
      selectedSurfPost: 0,
      surfPostUserId: 0,
      surfPostId: 0,
      surfPostPhoto: '', 
      surfPostName: '', 
      surfPostLocation: '', 
      surfPostLink: '', 
      surfPostDate: '', 
      surfPostDescription: '',
      postFront: true,
      connections: [],
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.handlePostView = this.handlePostView.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.getSets = this.getSets.bind(this);
    this.getShows = this.getShows.bind(this);
    this.getConnections = this.getConnections.bind(this)
    this.clearStateForPostPage = this.clearStateForPostPage.bind(this);
    this.handleSurfPostView = this.handleSurfPostView.bind(this);
    this.flipPost = this.flipPost.bind(this);
    this.handleSurfPostReply = this.handleSurfPostReply.bind(this);
  }

  componentDidMount() {
    const { userId } = this.state;
    axios.get(`/users/${userId}`)
      .then(({ data }) => {
        this.setState(data)
        this.getSets();
        this.getShows();
        this.getConnections();
      })
      .catch(console.log)
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
      surfPostUserId: otherUserPosts[nextPost].userId,
      surfPostId: otherUserPosts[nextPost].id,
      surfPostPhoto: otherUserPosts[nextPost].photo, 
      surfPostName: otherUserPosts[nextPost].user.name, 
      surfPostLocation: otherUserPosts[nextPost].user.location, 
      surfPostLink: otherUserPosts[nextPost].user.link, 
      surfPostDate: `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
      surfPostDescription: otherUserPosts[nextPost].description,
    })
  }

  flipPost(e) {
    if (e.target.id && e.target.id !== 'PostFormUserInfoName') {
      this.setState({
        postFront: !this.state.postFront
      })
    }
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
    let convertedDate = new Date(postDate);
    if (postPhoto && convertedDate.getTime() && postLocation && postDescription) {
      const post = {
        userId: Number(this.state.userId),
        photo: postPhoto,
        location: postLocation,
        date: convertedDate,
        description: postDescription,
      }
      axios.post('/sets', post) 
        .then(() => {
          this.getSets();
          this.clearStateForPostPage();
        })
        .catch(console.log)
    }
  }

  handleSurfPostReply() {
    const { postPhoto, surfPostDate, postDescription, surfPostLocation } = this.state;
    if (postPhoto && postDescription) {
      let convertedDate = new Date(surfPostDate);
      let bandPost = {
        userId: Number(this.state.userId),
        photo: postPhoto,
        location: surfPostLocation,
        date: convertedDate,
        description: postDescription,
      }
      axios.post('/sets', bandPost) 
        .then(() => {
          this.getSets();
          this.createConnection(convertedDate)
          this.clearStateForPostPage();
        })
        .catch(console.log)
    }
  }

  createConnection(date) {
    const { surfPostId, surfPostName, surfPostUserId, userId, name } = this.state;
    axios.get(`/sets/${Number(this.state.userId)}?date=${date}`)
      .then(res => {
        const connection = {
          bandName: name,
          venueName: surfPostName,
          bandId: userId,
          venueId: surfPostUserId,
          setId: res.data.id,
          showId: surfPostId,
          messengerId: userId,
          conversation: '[]',
          messengerStatus: 'requested',
          recipientStatus: 'received',
          collaboration: false,
        }
        axios.post('/connections', connection)
          .then(res => console.log('Connection submitted'))
          .catch(console.log)
      })
      .catch(console.log)
  }

  getConnections() {
    let { userId } = this.state;
    axios.get(`/connections?bandId=${userId}`)
      .then(res => {
        this.setState({
          connections: res.data
        })
      })
      .catch(console.log)
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

  getShows() {
    axios.get(`/shows`)
      .then(res => {
        const { date } = res.data[0];
        this.setState({
          otherUserPosts: res.data,
          surfPostUserId: res.data[0].userId,
          surfPostId: res.data[0].id,
          surfPostPhoto: res.data[0].photo, 
          surfPostName: res.data[0].user.name, 
          surfPostLocation: res.data[0].user.location, 
          surfPostLink: res.data[0].user.link, 
          surfPostDate: `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
          surfPostDescription: res.data[0].description,
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
    const { connections, userId, name, link, location, about, photo, posts, selectedNavButton, page, postId, postPhoto, postDescription, postDate, postLocation, surfPostPhoto, surfPostName, surfPostLocation, surfPostLink, surfPostDate, surfPostDescription, otherUserPosts, postFront } = this.state;
    const userInfo = { userId, name, link, location, about, photo, posts }
    const postInfo = { postId, postPhoto, postDescription, postDate, postLocation }
    const currentSurfPost = { surfPostPhoto, surfPostName, surfPostLocation, surfPostLink, surfPostDate, surfPostDescription }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} appState={ this.state } handlePage={this.handlePage} handlePostSubmit={this.handlePostSubmit} handlePostDelete={this.handlePostDelete} handleSurfPostReply={this.handleSurfPostReply}/>
        <Content connections={connections} selectedNavButton={selectedNavButton} userInfo={userInfo} page={page} handlePage={this.handlePage} handlePostFormChange={this.handlePostFormChange} postInfo={postInfo} handlePostSubmit={this.handlePostSubmit} handlePostView={this.handlePostView} handleSurfPostView={this.handleSurfPostView} currentSurfPost={currentSurfPost} otherUserPosts={otherUserPosts} flipPost={this.flipPost} postFront={postFront}/>
      </div>
    )
  }
}

export default App;