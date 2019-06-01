import React, { Component } from 'react'
import axios from 'axios'

import apiUrl from './apiConfig'
import { Link } from 'react-router-dom'

class Blogs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blogs: []
    }
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/blogs`)
    this.setState({ blogs: response.data.blogs })
  }

  render () {
    const blogs = this.state.blogs.map(blog => (
      <div key={blog.id} className="single-blog">
        <h5>{blog.title}</h5><p>by: {blog.owner}</p>
        <p>{blog.text}</p>
        <p>{blog.likes.length} likes</p>
        <Link to={'/blogs/' + blog.id}>view comments({blog.comments.length || '0'})</Link>
      </div>
    ))

    return (
      <div className="blogs">
        <div>
          {blogs}
        </div>
      </div>
    )
  }
}

export default Blogs
