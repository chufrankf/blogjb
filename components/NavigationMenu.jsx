import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class NavigationMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item name="feed" active={activeItem === 'feed'} onClick={this.handleItemClick} />
        <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
        <Menu.Item name="newPost" active={activeItem === 'newPost'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}
