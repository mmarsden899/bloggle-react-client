import React, { Component } from 'react'
import axios from 'axios'

import apiUrl from './apiConfig'
import { Link } from 'react-router-dom'

class SingleBlog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blog: {}
    }
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/blogs/${this.props.match.params.id}`)
    this.setState({ blog: response.data.blog })
  }

  render () {
    const { blog } = this.state
    return (
      <div>
        <Link to="/"><h5>x</h5></Link>
        <div key={blog.id} className="blogs">
          <div className="single-blog">
            <p>{blog.title}</p>
            <p>{blog.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleBlog
