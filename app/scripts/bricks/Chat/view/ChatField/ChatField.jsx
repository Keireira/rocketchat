import React from 'react';

import locales from 'locales';

import Wrapper, { Caption, Form, Textfield, Button } from './styles';

class ChatField extends React.PureComponent {
  sendMessage = (message, callback) => {
    if (message.length < 2) return null;

    if (typeof this.props.sendMessage === 'function') {
      this.props.sendMessage(message);
    }

    if (typeof callback === 'function') {
      callback();
    }

    console.log('message', message);
  };

  submitForm = (event) => {
    event.preventDefault();

    const { message } = event.target.elements;

    const text = message.value.trim();
    this.sendMessage(text, (value = '') => {
      message.value = value;
    });
  };

  submitText = ({ ctrlKey, metaKey, keyCode, target }) => {
    const isMetaEnter = (ctrlKey || metaKey) && (keyCode === 13 || keyCode === 10);

    if (isMetaEnter) {
      const text = target.value.trim();

      this.sendMessage(text, (value = '') => {
        target.value = value;
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <Caption>{locales.chat}</Caption>

        <Form method="post" onSubmit={this.submitForm}>
          <Textfield name="message" placeholder={locales.message} onKeyDown={this.submitText} />
          <Button>{locales.send}</Button>
        </Form>
      </Wrapper>
    );
  };
};

export default ChatField;
