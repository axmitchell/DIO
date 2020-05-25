import React, { Component } from 'react';
import SurfPost from './SurfPost.jsx';
import axios from 'axios';

class PostGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      otherUserPosts: [],
      selectedPost: 0,
      photo: '', 
      name: '', 
      location: '', 
      link: '', 
      date: '', 
      description: '',
    }
    this.handlePostGalleryState = this.handlePostGalleryState.bind(this);
  }

  componentDidMount() {
    const { type } = this.props;
    let route
    type === 'band' ? route = 'shows' : route = 'sets';
    console.log(route);
    axios.get(`/${route}`)
      .then(res => {
        res.data.forEach(post => {
          post.date = `${post.date.slice(5,7)}/${post.date.slice(8,10)}/${post.date.slice(2,4)}`
        })
        this.setState({
          otherUserPosts: res.data,
          photo: res.data[0].photo, 
          name: res.data[0].name, 
          location: res.data[0].location, 
          link: res.data[0].link, 
          date: res.data[0].date, 
          description: res.data[0].description,
        })
      })
      .catch(console.log)
  }

  handlePostGalleryState(e) {
    const { selectedPost, otherUserPosts } = this.state
    let nextPost;
    if (e.target.id === 'NextSet' && selectedPost < otherUserPosts.length - 1) {
      nextPost = selectedPost + 1;
      this.setState({
        selectedPost: nextPost,
        photo: otherUserPosts[nextPost].photo, 
        name: otherUserPosts[nextPost].name, 
        location: otherUserPosts[nextPost].location, 
        link: otherUserPosts[nextPost].link, 
        date: otherUserPosts[nextPost].date, 
        description: otherUserPosts[nextPost].description,
      })
    } else if (e.target.id === 'PreviousSet' && selectedPost > 0) {
      nextPost = selectedPost - 1;
      this.setState({
        selectedPost: nextPost,
        photo: otherUserPosts[nextPost].photo, 
        name: otherUserPosts[nextPost].name, 
        location: otherUserPosts[nextPost].location, 
        link: otherUserPosts[nextPost].link, 
        date: otherUserPosts[nextPost].date, 
        description: otherUserPosts[nextPost].description,
      })
    }
  }

  render() {
    const { type } = this.props;
    const { photo, name, location, link, date, description } = this.state;
    let currentPost = { photo, name, location, link, date, description }
    if (this.state.otherUserPosts.length === 0) {
      return (
        <div id='PostGallery' className='Content' style={{width: '90%', height: '80%'}}>
          NO USER POSTS JUST YET
        </div>
      )
    } else if (type === 'band') {
      return (
        <div id='PostGallery' className='Content'>
          <SurfPost key={currentPost.link} post={currentPost} handlePostGalleryState={this.handlePostGalleryState}/>
        </div>
      )
    } else if (type === 'venue') {
      return (
        <div id='PostGallery' className='Content'>
            <SurfPost key={currentPost.link} post={currentPost} handlePostGalleryState={this.handlePostGalleryState}/>
        </div>
      )
    }
  }
}

export default PostGallery;