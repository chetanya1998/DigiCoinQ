import React from 'react';
import {Container} from 'semantic-ui-react';
import Header from './Header';
export default (props) =>{
  return(
    <div>
    <Container>
      <link rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    <Header />
    {props.children}
    </Container>
    </div>
  );
};
