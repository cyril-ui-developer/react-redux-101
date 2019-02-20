import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';

class ListPosts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
      }

    //   componentWillReceiveProps(nextProps) {
    //     if (nextProps.newPost) {
    //     //  this.props.posts.unshift(nextProps.newPost);
    //       this.props.posts = [...this.props.posts, nextProps.newPost]

    //     }
    //   }

  render() {
    const postItems = this.props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ));
    return (
        <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

ListPosts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(ListPosts);
