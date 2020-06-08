import React, { Component } from 'react';
import SurfPost from './SurfPost.jsx';
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
      link: '', 
      date: '', 
      description: '',
    }
    this.handleSurfPageState = this.handleSurfPageState.bind(this);
  }

  componentDidMount() {
    axios.get(`/shows`)
      .then(res => {
        const { date } = res.data[0];
        this.setState({
          otherUserPosts: res.data,
          photo: res.data[0].photo, 
          name: res.data[0].user.name, 
          location: res.data[0].user.location, 
          link: res.data[0].user.link, 
          date: `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
          description: res.data[0].description,
        })
      })
      .catch(console.log)
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
      location: otherUserPosts[nextPost].user.location, 
      link: otherUserPosts[nextPost].user.link, 
      date: `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)}`, 
      description: otherUserPosts[nextPost].description,
    })
  }

  render() {
    const { photo, name, location, link, date, description } = this.state;
    let currentPost = { photo, name, location, link, date, description }
    if (this.state.otherUserPosts.length === 0) {
      return (
        <div id='SurfPage' className='Content' style={{width: '90%', height: '80%'}}>
          NO USER POSTS JUST YET
        </div>
      )
    } else {
      return (
        <div id='SurfPage' className='Content'>
          <SurfPost key={currentPost.link} post={currentPost} handleSurfPageState={this.handleSurfPageState}/>
        </div>
      )
    }
  }
}

export default SurfPage;
