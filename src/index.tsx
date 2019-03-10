import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './pages/index';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import gql from "graphql-tag";

const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io"
  uri: "http://localhost:3000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Index />
  </ApolloProvider>,
  document.querySelector("#root")
);
