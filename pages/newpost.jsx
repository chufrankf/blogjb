import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import NavigationMenu from '../components/NavigationMenu';
import NewPost from '../components/NewPost';

const NewPostPage = () => (
  <div>
    <NavigationMenu activeItem="newpost" />
    <NewPost />
  </div>
);

export default NewPostPage;
