import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';

import NavigationMenu from '../components/NavigationMenu';
import Feed from '../components/Feed';

const Index = (props) => {
  const { posts } = props;

  return (
    <div>
      <NavigationMenu activeItem="feed" />
      <Feed posts={posts} />
    </div>
  );
};

Index.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

// getInitialProps must be done on pages only, cannot be done within components
Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:9001/api/post/');
  const data = await res.json();

  return { posts: data };
};

export default Index;
