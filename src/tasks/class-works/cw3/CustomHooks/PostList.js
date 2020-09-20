import React from 'react';
import { usePosts } from "./usePosts";

function PostList() {
  const [posts, isFetching] = usePosts();

  return (
    <ul>
      {isFetching && <li>Loading...</li>}
      {posts.map(post => <li>{post.title}</li>)}
    </ul>
  );
}

export default PostList;
