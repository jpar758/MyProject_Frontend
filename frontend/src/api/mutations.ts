import { gql } from "@apollo/client";
import * as fragments from "./fragments";


export const ADD_BLOG = gql`
mutation AddBlog(    
  $name: String!
  $author: String!
  $description: String!
  $imageUrl: String!
  $address: String!
  
) {
  addBlog(input: { name: $name, author: $author,  description: $description, imageUrl : $imageUrl, address: $address}) {
    ...blogFields
  }
}
${fragments.BLOG}
`;
