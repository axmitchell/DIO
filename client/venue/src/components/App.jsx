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
      postId: 0,
      otherUserPosts: [],
      selectedSurfPost: 0,
      surfPostUserId: 0,
      surfPostId: 0,
      surfPostPhoto: '', 
      surfPostName: '', 
      surfPostUserLocation: '',
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
    this.getShows = this.getShows.bind(this);
    this.getSets = this.getSets.bind(this);
    this.getConnections = this.getConnections.bind(this)
    this.clearStateForPostPage = this.clearStateForPostPage.bind(this);
    this.handleSurfPostView = this.handleSurfPostView.bind(this);
    this.clearPostState = this.clearPostState.bind(this);
    this.flipPost = this.flipPost.bind(this);
    this.handleSurfPostReply = this.handleSurfPostReply.bind(this);
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
        this.getConnections()
      })
      .catch(console.log)
  }

  handlePage(page) {
    if (page === '') {
      this.setState({
        page: '',
        postId: 0,
        postPhoto: '',
        postLocation: '',
        postDate: '',
        postDescription: ''
      });
    } else {
      this.setState({ page })
    }
  }

  getConnections() {
    let { userId } = this.state;
    axios.get(`/connections?venueId=${userId}`)
      .then(res => {
        this.setState({
          connections: res.data
        })
      })
      .catch(console.log)
  }

  getSets() {
    axios.get(`/sets`)
      .then(res => {
        const { date } = res.data[0];
        this.setState({
          otherUserPosts: res.data,
          surfPostUserId: res.data[0].userId,
          surfPostId: res.data[0].id,
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
      surfPostUserId: otherUserPosts[nextPost].userId,
      surfPostId: otherUserPosts[nextPost].id,
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
    const { posts, surfPostId, surfPostLocation, surfPostDate, location } = this.state;
    if (arguments.length === 0 && surfPostId) {
      console.log(posts)
      let compatiblePostIndex = posts.findIndex(post => location === surfPostLocation && post.date === surfPostDate);
      console.log(compatiblePostIndex)
      if (compatiblePostIndex !== -1) {
        post = posts[compatiblePostIndex]
      } else { return; }
    }
    const { photo, date, description, id } = post;
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
    let convertedDate = new Date(postDate);
    if (postPhoto && convertedDate.getTime() && postDescription) {
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

  handleSurfPostReply() {
    const { postPhoto, surfPostDate, postDescription, postId } = this.state;
    let convertedDate = new Date(surfPostDate);
    if (postId === 0) {
      if (postPhoto !== '' && postDescription) {
        let venuePost = {
          userId: Number(this.state.userId),
          photo: postPhoto,
          date: convertedDate,
          description: postDescription,
        }
        axios.post('/shows', venuePost) 
          .then(() => {
            this.getShows();
            this.createConnection(convertedDate)
            this.clearStateForPostPage();
          })
          .catch(console.log)
      }
    } else {
      this.createConnection(convertedDate)
      this.clearStateForPostPage();
    }
  }

  createConnection(date) {
    const { surfPostId, surfPostName, surfPostUserId, userId, name } = this.state;
    axios.get(`/shows/${Number(this.state.userId)}?date=${date}`)
      .then(res => {
        const connection = {
          bandName: surfPostName,
          venueName: name,
          bandId: surfPostUserId,
          venueId: userId,
          setId: surfPostId,
          showId: res.data.id,
          messengerId: userId,
          conversation: '[]',
          messengerStatus: 'requested',
          recipientStatus: 'received',
          collaboration: false,
        };
        axios.post('/connections', connection)
          .then(res => this.getConnections())
          .catch(console.log)
      })
      .catch(console.log)
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

  clearPostState() {
    this.setState({
      postId: 0,
      postPhoto: '',
      postLocation: '',
      postDate: '',
      postDescription: '',
    })
  }

  render() {
    const { connections, userId, name, link, location, about, photo, posts, selectedNavButton, page, postId, postPhoto, postDescription, postDate, postLocation, surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription, otherUserPosts, postFront } = this.state;
    const userInfo = { userId, name, link, location, about, photo, posts }
    const postInfo = { postId, postPhoto, postDescription, postDate, postLocation }
    const currentSurfPost = { surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription }
    return(
      <div id='Dashboard'>
        <Nav handleNavButtonClick={this.handleNavButtonClick} appState={ this.state } handlePage={this.handlePage} handlePostSubmit={this.handlePostSubmit} handlePostDelete={this.handlePostDelete} handleSurfPostReply={this.handleSurfPostReply} handlePostView={this.handlePostView} clearPostState={this.clearPostState}/>
        <Content connections={connections} selectedNavButton={selectedNavButton} userInfo={userInfo} page={page} handlePage={this.handlePage} handlePostFormChange={this.handlePostFormChange} postInfo={postInfo} handlePostSubmit={this.handlePostSubmit} handlePostView={this.handlePostView} handleSurfPostView={this.handleSurfPostView} currentSurfPost={currentSurfPost} otherUserPosts={otherUserPosts} flipPost={this.flipPost} postFront={postFront}/>
      </div>
    )
  }
}

export default App;