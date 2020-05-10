import React, { Component } from 'react'
import axios from 'axios';
import SelfPostGallery from './SelfPostGallery.jsx'
import SelfPostForm from './SelfPostForm.jsx';
import SelfPostPreview from './SelfPostPreview.jsx';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handlePostSubmit(e) {
    e.preventDefault()
    const { image, location, date, description } = this.state;
    const bandPost = Object.assign({user: this.props.userInfo.user}, this.state)
    // if (image && location && date && description) {
      axios.post('/bandPosts', bandPost) 
        .then(console.log)
        .catch(console.log)
      // this.clearState()
      // this.props.handlePageChange('')
    // }
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
        <SelfPostForm userInfo={this.props.userInfo} handlePageChange={this.props.handlePageChange} state={this.state} handleChange={this.handleChange}/>
      )
    } else if (this.props.userInfo.page === 'SelfPostPreview') {
      return (
        <SelfPostPreview userInfo={this.props.userInfo} handlePageChange={this.props.handlePageChange} state={this.state} handlePostSubmit={this.handlePostSubmit}/>
      )
    } else {
      return (
        <SelfPostGallery posts={this.props.userInfo.posts} handlePageChange={this.props.handlePageChange}/>
      ) 
    }
  }
}

export default SelfPostPage