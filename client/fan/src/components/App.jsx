import React, { Component } from 'react';
import SetThumbnail from './SetThumbnail.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.getSets = this.getSets.bind(this);
  }

  componentDidMount() {
    this.getSets()
  }

  getSets() {
    axios.get(`/sets/`)
    .then(res => {
      res.data.forEach(post => {
        post.date = `${post.date.slice(5,7)}/${post.date.slice(8,10)}/${post.date.slice(2,4)}`;
      })
      this.setState({
        posts: res.data,
      })
    })
    .catch(console.log)
  }

  render() {
    const { posts } = this.state
    return(
      <div className="demo-gallery">
        <ul id="lightgallery">
          {posts.map(post => (
            <SetThumbnail photo={post.photo} key={post.id}/>
          ))}
                  {/* <li data-src="https://sachinchoolur.github.io/lightGallery/static/img/1-1600.jpg">
          <a href="">
            <img src="https://sachinchoolur.github.io/lightGallery/static/img/thumb-1.jpg"/>
          </a>
        </li>
        <li data-src="https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg">
          <a href="">
            <img src="https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg"/>
          </a>
        </li>
        <li data-src="https://sachinchoolur.github.io/lightGallery/static/img/13-1600.jpg">
          <a href="">
            <img src="https://sachinchoolur.github.io/lightGallery/static/img/thumb-13.jpg"/>
          </a>
        </li>
        <li data-src="https://sachinchoolur.github.io/lightGallery/static/img/4-1600.jpg">
          <a href="">
            <img src="https://sachinchoolur.github.io/lightGallery/static/img/thumb-4.jpg"/>
          </a>
        </li> */}
        </ul>
      </div>
    )
  }
}

export default App;