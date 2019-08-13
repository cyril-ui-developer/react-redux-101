import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost, createUserData  } from '../actions/postActions';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: ''
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
   
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value })
      }

      onSubmit(e) {
        e.preventDefault();
    
        const post = {
          title: this.state.title,
          description: this.state.description
        };
       // this.props.onCreatePost(post);
        this.props.createPost(post);
        this.props.createUserData(post)
      }

  render() {
    return (
        <div>
        <h1>Create New Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="description"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
    createUserData: PropTypes.func.isRequired,
  };
  
export default connect(null, { createPost, createUserData })(CreatePost);
