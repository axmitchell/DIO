import React, { Component } from 'react'
import axios from 'axios';
import SelfPostGallery from './SelfPostGallery.jsx'
import SelfPostForm from './SelfPostForm.jsx';
import SelfPostPreview from './SelfPostPreview.jsx';
import SelfPost from './SelfPost.jsx';

class SelfPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      location: '',
      date: '',
      description: '',
    }
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleSelfPostPageState = this.handleSelfPostPageState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleSelfPostPageState(property) {
    const { photo, location, date, description } = property;
    this.setState({
      image: photo,
      location,
      date,
      description,
    })
  }

  handlePostSubmit(e) {
    e.preventDefault()
    const { image, location, date, description } = this.state;
    if (image && location && date && description) {
      const bandPost = {
        userId: Number(this.props.userInfo.user),
        photo: image,
        location: location,
        date: date,
        description: description,
      }
      axios.post('/bandPosts', bandPost) 
        .then(console.log)
        .catch(console.log)
      axios.get('/bandPosts')
        .then(res => this.props.handleAppStateChange({posts: res.data}))
        .catch(console.log);
      this.clearState()
      }
    this.props.handleAppStateChange({page: ''})
  }

  clearState() {
    this.setState({
      image: '',
      location: '',
      date: '',
      description: '',
    })
  }

  render() {
    if (this.props.userInfo.page === 'SelfPostForm') {
      return(
        <SelfPostForm userInfo={this.props.userInfo} handleAppStateChange={this.props.handleAppStateChange} state={this.state} handleChange={this.handleChange}/>
      )
    } else if (this.props.userInfo.page === 'SelfPost') {
      return (
        <SelfPost post={this.state}/>
      )
    } else if (this.props.userInfo.page === 'SelfPostPreview') {
      return (
        <SelfPostPreview userInfo={this.props.userInfo} handleAppStateChange={this.props.handleAppStateChange} state={this.state} handlePostSubmit={this.handlePostSubmit}/>
      )
    } else {
      return (
        <SelfPostGallery posts={this.props.userInfo.posts} handleAppStateChange={this.props.handleAppStateChange} handleSelfPostPageState={this.handleSelfPostPageState}/>
      ) 
    }
  }
}

export default SelfPostPage