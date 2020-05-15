import React, { Component } from 'react';
// import BandPostThumbnail from './BandContent/BandPostThumbnail.jsx'
// import VenuePostThumbnail from './VenueContent/VenuePostThumbnail.jsx'
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

  handlePostGalleryState() {
    const { selectedPost, otherUserPosts } = this.state
    if (selectedPost < otherUserPosts.length - 1) {
      let nextPost = selectedPost + 1
      this.setState({
        selectedPost: selectedPost + 1,
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
    const { otherUserPosts, selectedPost, photo, name, location, link, date, description } = this.state;
    let currentPost = { photo, name, location, link, date, description }
    if (this.state.otherUserPosts.length === 0) {
      return (
        <div id='PostGallery' className='Content' style={{width: '90%', height: '80%'}}>
          NO USER POSTS JUST YET
        </div>
      )
    }
    if (type === 'band') {
      return (
        <div id='PostGallery' className='Content' onClick={this.handlePostGalleryState}>
          {/* {this.state.otherUserPosts.map(post => {
            // return <VenuePostThumbnail key={post.id} post={post} type={type}/>
            // return <OtherPosts key={post.id} post={post} />
            return <SurfPost key={post.id} post={post}/>
          })} */}
          <SurfPost post={currentPost}/>
        </div>
      )
    } else if (type === 'venue') {
      return (
        <div id='PostGallery' className='Content'>
          {this.state.otherUserPosts.map(post => {
            // return <BandPostThumbnail key={post.id} post={post} type={type}/>
            // return <OtherPosts key={post.id} post={post} />
            return <SurfPost post={currentPost} />
          })}
        </div>
      )
    }
    // return (
    //   <div id='PostGallery' className='Content'>
    //     <SurfPost post={this.state.otherUserPosts[0]} />
    //   </div>
    // )
  }
}

export default PostGallery;
