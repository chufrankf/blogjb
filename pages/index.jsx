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
Index.getInitialProps = async ({ req }) => {
  // Issue with isomorphic fetch based off node-fetch that needs absolute
  // address for server side fetches
  // https://github.com/zeit/next.js/issues/1213
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch(`${baseUrl}/api/post/`);
  const data = await res.json();

  return { posts: data };
};

export default Index;
