import React from 'react';

import locales from 'locales';

import { StyledChatField, Caption, Form, Textfield, Button } from './styles';

const submitMessage = (event) => {
  event.preventDefault();

  const { message } = event.target.elements;
  console.log('message', message.value);

  message.value = '';
};

const triggerFormSubmit = ({ ctrlKey, metaKey, keyCode, target }) => {
  const isTriggered = (ctrlKey || metaKey) && (keyCode === 13 || keyCode === 10);

  if (isTriggered) {
    const { submit } = target.form.elements;
    submit.click();
  }
};

const ChatField = () => {
  return (
    <StyledChatField>
      <Caption>{locales.chat}</Caption>

      <Form method="post" onSubmit={submitMessage}>
        <Textfield name="message" placeholder={locales.message} onKeyDown={triggerFormSubmit} />
        <Button name="submit">{locales.send}</Button>
      </Form>
    </StyledChatField>
  );
};

export default ChatField;
