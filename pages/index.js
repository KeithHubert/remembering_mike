import React from 'react'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from '../gql/getPosts'

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <h1>
        <h3>Setting up Apollo GraphQL in Next.js with Server Side Rendering</h3>
      </h1>
      <div>
        {data.posts.map(data => (
          <ul key={data.id}>
            <li>{data.title}{data.body}</li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default withApollo({ ssr: true })(IndexPage)
