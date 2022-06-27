import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3e0p80cm101z7d3i63z4h/master',
    cache: new InMemoryCache(),
})