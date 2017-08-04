import React from 'react';

import { Page } from './styles';

class Index extends React.PureComponent {
  render() {
    return (
      <Page>
        {this.props.children}
      </Page>
    );
  };
};

export default Index;
