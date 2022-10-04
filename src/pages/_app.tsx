import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { backendClient } from 'src/components/shared/graphql/ClientGraphql'

import '../styles/global.less'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={backendClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
