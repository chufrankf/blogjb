import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import NavigationMenu from '../components/NavigationMenu';
import Feed from '../components/Feed';

function Index() {
  return (
    <div>
      <NavigationMenu activeItem="feed" />
      <Feed />
    </div>
  );
}

export default Index;
