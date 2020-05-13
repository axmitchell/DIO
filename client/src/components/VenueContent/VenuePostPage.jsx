import React, { Component } from 'react'
import axios from 'axios';
import VenuePostGallery from './VenuePostGallery.jsx'
import VenuePostForm from './VenuePostForm.jsx';
import VenuePostPreview from './VenuePostPreview.jsx';
import VenuePost from './VenuePost.jsx';

class VenuePostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      date: '',
      description: '',
    }
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleVenuePostPageState = this.handleVenuePostPageState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleVenuePostPageState(property) {
    const { photo, date, description } = property;
    this.setState({
      image: photo,
      date,
      description,
    })
  }

  handlePostSubmit(e) {
    e.preventDefault()
    const { image, date, description } = this.state;
    if (image && date && description) {
      const VenuePost = {
        userId: Number(this.props.userInfo.userId),
        photo: image,
        date: date,
        description: description,
      }
      axios.post('/shows', VenuePost) 
        .then(console.log)
        .catch(console.log)
      axios.get(`/shows/:${Number(this.props.userInfo.userId)}`)
        .then(res => this.props.handleAppState({posts: res.data}))
        .catch(console.log);
      this.clearState()
      }
    this.props.handleAppState({page: ''})
  }

  clearState() {
    this.setState({
      image: '',
      date: '',
      description: '',
    })
  }

  render() {
    if (this.props.page === 'VenuePostForm') {
      return(
        <VenuePostForm userInfo={this.props.userInfo} handleAppState={this.props.handleAppState} state={this.state} handleChange={this.handleChange}/>
      )
    } else if (this.props.page === 'VenuePost') {
      return (
        <VenuePost post={this.state}/>
      )
    } else if (this.props.page === 'VenuePostPreview') {
      return (
        <VenuePostPreview userInfo={this.props.userInfo} handleAppState={this.props.handleAppState} state={this.state} handlePostSubmit={this.handlePostSubmit}/>
      )
    } else {
      return (
        <VenuePostGallery posts={this.props.userInfo.posts} handleAppState={this.props.handleAppState} handleVenuePostPageState={this.handleVenuePostPageState}/>
      ) 
    }
  }
}

export default VenuePostPage