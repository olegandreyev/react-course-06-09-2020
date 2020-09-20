import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";

class PostsList extends Component {

  render() {
    const { posts, isPostFetching } = this.props;
    return (
      <ul>
        {posts.map(post => <li>{post.title}</li>)}
      </ul>
    );
  }
}

class PostFeed extends Component {
  render() {
    const { posts, isPostFetching } = this.props;
    return (
      <Feed>
        {posts.map(post => (
          <Feed.Event key={post.id}>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a>{post.title}</a>
              </Feed.Summary>
              <Feed.Extra text>
                {post.body}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        ))}
      </Feed>
    );
  }
}

// render props way
export class ProvidePods2 extends React.Component {
  state = {
    posts: [],
    isPostFetching: false,
  };

  componentDidMount() {
    this.setState({ isPostFetching: true });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    const { posts } = this.state;
    return this.props.children(posts);
  }
}

// HOC way
const providePods = Component => {

  class ProvidePosts extends React.Component {

    state = {
      posts: [],
      isPostFetching: false,
    };

    componentDidMount() {
      this.setState({ isPostFetching: true });
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          this.setState({ posts })
        })
    }

    render() {
      const { posts, isPostFetching } = this.state;
      return <Component posts={posts} isPostFetching={isPostFetching} {...this.props} />
    }
  }

  return ProvidePosts;
};

const EnhancedPostsList = providePods(PostsList);
const EnhancedPostFeed = providePods(PostFeed);


export {
  EnhancedPostsList,
  EnhancedPostFeed
};
