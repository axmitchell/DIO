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
        userId: Number(this.props.userInfo.userId),
        photo: image,
        location: location,
        date: date,
        description: description,
      }
      axios.post('/sets', bandPost) 
        .then(console.log)
        .catch(console.log)
      axios.get(`/sets/:${Number(this.props.userInfo.userId)}`)
        .then(res => this.props.handleAppState({posts: res.data}))
        .catch(console.log);
      this.clearState()
      }
    this.props.handleAppState({page: ''})
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
    if (this.props.page === 'SelfPostForm') {
      return(
        <SelfPostForm userInfo={this.props.userInfo} handleAppState={this.props.handleAppState} state={this.state} handleChange={this.handleChange}/>
      )
    } else if (this.props.page === 'SelfPost') {
      return (
        <SelfPost post={this.state}/>
      )
    } else if (this.props.page === 'SelfPostPreview') {
      return (
        <SelfPostPreview userInfo={this.props.userInfo} handleAppState={this.props.handleAppState} state={this.state} handlePostSubmit={this.handlePostSubmit}/>
      )
    } else {
      return (
        <SelfPostGallery posts={this.props.userInfo.posts} handleAppState={this.props.handleAppState} handleSelfPostPageState={this.handleSelfPostPageState}/>
      ) 
    }
  }
}

export default SelfPostPage