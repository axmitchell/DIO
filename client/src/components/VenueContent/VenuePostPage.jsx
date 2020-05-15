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
    const { userInfo, handleAppState } = this.props;
    
    if (image && date && description) {
      let convertedDate = new Date(date.slice(0,6) + '20' + date.slice(6,8));
      const VenuePost = {
        userId: Number(userInfo.userId),
        photo: image,
        name: userInfo.name,
        link: userInfo.link,
        location: userInfo.location,
        date: convertedDate,
        description: description,
      }
      axios.post('/shows', VenuePost) 
        .then(console.log)
        .catch(console.log)
      axios.get(`/shows/:${Number(userInfo.userId)}`)
        .then(res => handleAppState({posts: res.data}))
        .catch(console.log);
      this.clearState()
      }
    handleAppState({page: ''})
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