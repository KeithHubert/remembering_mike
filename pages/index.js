import React from 'react'
import withApollo from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from '../gql/getPosts'
import NavBar from './components/NavBar'

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <NavBar />
      <h1>Remembering Mike</h1>
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
