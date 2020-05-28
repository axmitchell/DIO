import React, { Component } from 'react'
// import axios from 'axios';
import VenuePostGallery from './VenuePostGallery.jsx'
import VenuePostForm from './VenuePostForm.jsx';
import VenuePostPreview from './VenuePostPreview.jsx';
import VenuePost from './VenuePost.jsx';

class VenuePostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // image: '',
      // location: '',
      // date: '',
      // description: '',
    }
    // this.handlePostSubmit = this.handlePostSubmit.bind(this);
    // // this.handleChange = this.handleChange.bind(this);
    // this.clearState = this.clearState.bind(this);
    // this.handleVenuePostPageState = this.handleVenuePostPageState.bind(this);
  }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   })
  // }

  // handleVenuePostPageState(property) {
  //   const { photo, location, date, description } = property;
  //   this.setState({
  //     image: photo,
  //     location,
  //     date,
  //     description,
  //   })
  // }

  // handlePostSubmit(e) {
  //   e.preventDefault()
  //   const { image, location, date, description } = this.state;
  //   if (image && location && date && description) {
  //     let convertedDate = new Date(date.slice(0,6) + '20' + date.slice(6,8));
  //     const venuePost = {
  //       userId: Number(this.props.userInfo.userId),
  //       name: this.props.userInfo.name,
  //       link: this.props.userInfo.link,
  //       photo: image,
  //       location: location,
  //       date: convertedDate,
  //       description: description,
  //     }
  //     axios.post('/shows', venuePost) 
  //       .then(console.log)
  //       .catch(console.log)
  //     axios.get(`/shows/:${Number(this.props.userInfo.userId)}`)
  //       .then(res => this.props.handlePage({posts: res.data}))
  //       .catch(console.log);
  //     this.clearState()
  //     }
  //   this.props.handlePage('')
  // }

  // clearState() {
  //   this.setState({
  //     image: '',
  //     location: '',
  //     date: '',
  //     description: '',
  //   })
  // }

  render() {
    if (this.props.page === 'VenuePostForm') {
      return(
        <VenuePostForm userInfo={this.props.userInfo} handlePage={this.props.handlePage} postInfo={this.props.postInfo} handlePostFormChange={this.props.handlePostFormChange}/>
      )
    } else if (this.props.page === 'VenuePost' || this.props.page === 'PostDrop') {
      return (
        <VenuePost postInfo={this.props.postInfo}/>
      )
    } else if (this.props.page === 'VenuePostPreview') {
      return (
        <VenuePostPreview userInfo={this.props.userInfo} postInfo={this.props.postInfo}/>
      )
    } else {
      return (
        <VenuePostGallery posts={this.props.userInfo.posts} handlePage={this.props.handlePage} handlePostView={this.props.handlePostView}/>
      ) 
    }
  }
}

export default VenuePostPage