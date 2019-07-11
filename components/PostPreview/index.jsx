import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import roosterImage from './images/rooster.png';

const PostPreview = (props) => {
  const {
    header, meta, content, additionalDetails,
  } = props;

  return (
    <Item>
      <Item.Image size="tiny" src={roosterImage} />
      <Item.Content>
        <Item.Header as="a">{header}</Item.Header>
        { meta && <Item.Meta>{meta}</Item.Meta> }
        <Item.Description>{content}</Item.Description>
        { additionalDetails && <Item.Extra>{additionalDetails}</Item.Extra> }
      </Item.Content>
    </Item>
  );
};

PostPreview.propTypes = {
  header: PropTypes.string.isRequired,
  meta: PropTypes.string,
  content: PropTypes.string.isRequired,
  additionalDetails: PropTypes.string,
};


export default PostPreview;
