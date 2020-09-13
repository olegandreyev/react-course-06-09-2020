import React, { Component, Fragment } from 'react';
import { Feed, Loader } from 'semantic-ui-react';

class Posts extends Component {

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
    const { onPostSelect } = this.props;

    return (
      <Fragment>
        <Loader size='small' active={isPostFetching} />
        <Feed>
          {posts.map(post => (
            <Feed.Event key={post.id}>
              <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
              <Feed.Content>
                <Feed.Summary onClick={() => onPostSelect(post)}>
                  <a>{post.title}</a>
                </Feed.Summary>
                <Feed.Extra text>
                  {post.body}
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </Fragment>
    );
  }
}

export default Posts;
