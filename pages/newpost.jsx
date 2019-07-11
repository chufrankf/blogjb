import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import NavigationMenu from '../components/NavigationMenu';
import NewPost from '../components/NewPost';

function Index() {
  return (
    <div>
      <NavigationMenu activeItem="newpost" />
      <NewPost />
    </div>
  );
}

export default Index;
