/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/link-context';

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: "Bearer xxx"
  },
}));

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    new HttpLink({
      uri: 'http://localhost:8001/graphql',
    }),
  ),
});
