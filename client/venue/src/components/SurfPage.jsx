import React, { Component } from 'react';
import SurfPost from './SurfPost.jsx';
import SurfPostForm from './SurfPostForm.jsx';
import axios from 'axios';

class SurfPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      otherUserPosts: [],
      selectedPost: 0,
      photo: '', 
      name: '', 
      location: '', 
      userLocation: '',
      link: '', 
      date: '', 
      description: '',
      postFront: true,
    }
    this.handleSurfPageState = this.handleSurfPageState.bind(this);
    this.flipPost = this.flipPost.bind(this);
  }

  componentDidMount() {
    axios.get(`/sets`)
      .then(res => {
        const { date } = res.data[0];
        this.setState({
          otherUserPosts: res.data,
          photo: res.data[0].photo, 
          name: res.data[0].user.name, 
          location: res.data[0].location, 
          userLocation: res.data[0].user.location,
          link: res.data[0].user.link, 
          date:  `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
          description: res.data[0].description,
        })
      })
      .catch(console.log)
  }

  flipPost(e) {
    console.log(e.target.id)
    if (e.target.id && e.target.id !== 'PostFormUserInfoName') {
      this.setState({
        postFront: !this.state.postFront
      })
    }
  }

  handleSurfPageState(e) {
    const { selectedPost, otherUserPosts } = this.state
    let nextPost;
    if (e.target.id === 'NextSet' && selectedPost < otherUserPosts.length - 1) {
      nextPost = selectedPost + 1;
    } else if (e.target.id === 'PreviousSet' && selectedPost > 0) {
      nextPost = selectedPost - 1;
    }
    const { date } = otherUserPosts[nextPost]
    this.setState({
      selectedPost: nextPost,
      photo: otherUserPosts[nextPost].photo, 
      name: otherUserPosts[nextPost].user.name, 
      location: otherUserPosts[nextPost].location, 
      userLocation: otherUserPosts[nextPost].user.location,
      link: otherUserPosts[nextPost].user.link, 
      date: `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
      description: otherUserPosts[nextPost].description,
    })
  }

  render() {
    const { photo, name, location, userLocation, link, date, description, otherUserPosts, postFront } = this.state;
    let currentPost = { photo, name, location, userLocation, link, date, description }
    const { page, userInfo } = this.props;
    if (page === '') {
      if (otherUserPosts.length === 0) {
        return (
          <div id='SurfPage' className='Content' style={{width: '90%', height: '80%'}}>
            NO USER POSTS JUST YET
          </div>
        )
      } else {
        return (
          <SurfPost key={currentPost.link} post={currentPost} handleSurfPageState={this.handleSurfPageState}/>
        )
      }
    }
    if (page === 'SurfPostForm') {
      return (
        <SurfPostForm currentPost={currentPost} userInfo={userInfo} postFront={postFront} flipPost={this.flipPost}/>
      )
    }
  }
}

export default SurfPage;
