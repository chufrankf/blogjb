import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const NavigationMenu = (props) => {
  const { activeItem } = props;

  return (
    <Menu inverted>
      <Menu.Item name="feed" active={activeItem === 'feed'} href="/" />
      <Menu.Item name="friends" disabled />
      <Menu.Item name="newPost" active={activeItem === 'newpost'} href="/newpost" />
    </Menu>
  );
};

NavigationMenu.propTypes = {
  activeItem: PropTypes.string.isRequired,
};

export default NavigationMenu;
