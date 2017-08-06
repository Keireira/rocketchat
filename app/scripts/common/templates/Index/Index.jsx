import React from 'react';

import { IndexTemplate } from './styles';
import Sidebar from 'bricks/Sidebar';

const Index = (props) => {
  return (
    <IndexTemplate>
      {props.children}

      <Sidebar location={props.location} match={props.match} />
    </IndexTemplate>
  );
};

export default Index;
