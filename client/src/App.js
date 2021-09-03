import Router from "./components/Commons/Router";
import React, { useContext, useEffect } from 'react'

import {Store} from './store/mainStore'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message,  }) => {
      alert(`Graphql error: ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});



const App = () => {

  const [_, dispatch] = useContext(Store)

  useEffect(()=>{
    dispatch({type: 'LOAD_USER'})
  },[dispatch])

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router/>
      </ApolloProvider>
    </div>
  );
}

export default App;
