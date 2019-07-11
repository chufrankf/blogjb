import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const visibilityOptions = [
  { key: 'v', text: 'Private', value: 'private' },
  { key: 'f', text: 'Friends Only', value: 'friends' },
  { key: 'b', text: 'Public', value: 'public' },
];

export default class NewPost extends Component {
  state = {};

  render() {
    return (
      <Form>
        <Form.Input fluid label="Title" placeholder="A shot summary of your topic." />
        <Form.TextArea label="Body" placeholder="Enter the body of your post here." />
        <Form.Select fluid label="Visibility" options={visibilityOptions} defaultValue="private" />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
