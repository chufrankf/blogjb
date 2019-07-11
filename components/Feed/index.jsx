import React from 'react';
import { Item } from 'semantic-ui-react';
import PostPreview from '../PostPreview';

const Feed = () => (
  <Item.Group>
    <PostPreview header="Hello" content="This is my first post" />
  </Item.Group>
);

export default Feed;
