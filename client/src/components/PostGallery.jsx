import React, { Component } from 'react';
import BandPostThumbnail from './BandContent/BandPostThumbnail.jsx'
import VenuePostThumbnail from './VenueContent/VenuePostThumbnail.jsx'
import axios from 'axios';

class PostGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      otherUserPosts: []
    }
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
          otherUserPosts: res.data
        })
      })
      .catch(console.log)
  }
  render() {
    const { type } = this.props;
    if (type === 'band') {
      return (
        <div id='PostGallery' className='Content'>
          {this.state.otherUserPosts.map(post => {
            return <VenuePostThumbnail key={post.id} post={post} type={type}/>
          })}
        </div>
      )
    } else if (type === 'venue') {
      return (
        <div id='PostGallery' className='Content'>
          {this.state.otherUserPosts.map(post => {
            return <BandPostThumbnail key={post.id} post={post} type={type}/>
          })}
        </div>
      )
    }
  }
}

export default PostGallery;
