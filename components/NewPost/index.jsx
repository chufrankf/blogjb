import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const visibilityOptions = [
  { key: 'v', text: 'Private', value: 'Private' },
  { key: 'f', text: 'Friends Only', value: 'Friends' },
  { key: 'b', text: 'Public', value: 'Public' },
];

export default class NewPost extends Component {
  state = { title: '', body: '', visibility: 'Private' };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { title, body, visibility } = this.state;

    // TODO: set loading on before fetch, then off after
    fetch('http://localhost:9001/api/post/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content: body,
        visibility,
      }),
    }).then(() => {
      this.setState({ title: '', body: '', visibility: 'Private' });
    });
  }

  render() {
    const { title, body, visibility } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input placeholder="Title" name="title" value={title} onChange={this.handleChange} />
        <Form.TextArea placeholder="Body" name="body" value={body} onChange={this.handleChange} />
        <Form.Select options={visibilityOptions} name="visibility" value={visibility} onChange={this.handleChange} />
        <Form.Button disabled={!title || !body}>
          Submit
        </Form.Button>
      </Form>
    );
  }
}
