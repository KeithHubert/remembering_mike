
import { gql } from "apollo-boost";

export const GET_POSTS = gql`
{
  posts {
    id
    created_at
    body
    title
  }
}
`
