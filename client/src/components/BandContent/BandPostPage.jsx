import React, { Component } from 'react'
import axios from 'axios';
import BandPostGallery from './BandPostGallery.jsx'
import BandPostForm from './BandPostForm.jsx';
import BandPostPreview from './BandPostPreview.jsx';
import BandPost from './BandPost.jsx';

class BandPostPage extends Component {
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
    this.handleBandPostPageState = this.handleBandPostPageState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleBandPostPageState(property) {
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
      let convertedDate = new Date(date.slice(0,6) + '20' + date.slice(6,8));
      const bandPost = {
        userId: Number(this.props.userInfo.userId),
        photo: image,
        location: location,
        date: convertedDate,
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
    if (this.props.page === 'BandPostForm') {
      return(
        <BandPostForm userInfo={this.props.userInfo} handleAppState={this.props.handleAppState} state={this.state} handleChange={this.handleChange}/>
      )
    } else if (this.props.page === 'BandPost') {
      return (
        <BandPost post={this.state}/>
      )
    } else if (this.props.page === 'BandPostPreview') {
      return (
        <BandPostPreview userInfo={this.props.userInfo} handleAppState={this.props.handleAppState} state={this.state} handlePostSubmit={this.handlePostSubmit}/>
      )
    } else {
      return (
        <BandPostGallery posts={this.props.userInfo.posts} handleAppState={this.props.handleAppState} handleBandPostPageState={this.handleBandPostPageState}/>
      ) 
    }
  }
}

export default BandPostPage