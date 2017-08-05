import React from 'react';

import { IndexTemplate } from './styles';
import Sidebar from 'bricks/Sidebar';

const Index = (props) => {
  return (
    <IndexTemplate>
      {props.children}

      <Sidebar />
    </IndexTemplate>
  );
};

export default Index;
