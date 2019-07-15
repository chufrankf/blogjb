import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import PostPreview from '../PostPreview';

const Feed = (props) => {
  const { posts } = props;

  return (
    <Item.Group>
      {
        posts.map(post => (
          <PostPreview header={post.title} content={post.content} />
        ))
      }

    </Item.Group>
  );
};

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default Feed;
