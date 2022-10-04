import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const backendClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: ''
  }),
  cache: new InMemoryCache({})
})
