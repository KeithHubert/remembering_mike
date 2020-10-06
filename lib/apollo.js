import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://chief-gar-58.hasura.app/v1/graphql',
  cache: new InMemoryCache()
})

export default withApollo(apolloClient)
