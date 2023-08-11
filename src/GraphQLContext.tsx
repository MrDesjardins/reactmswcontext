import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';


const client = new ApolloClient({
  uri: 'http://127.0.0.1/graphql',
  cache: new InMemoryCache(),
});

export interface GraphQLContextProviderProps extends PropsWithChildren { }
export function GraphQLContextProvider(props: GraphQLContextProviderProps) {
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
}