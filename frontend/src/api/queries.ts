import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const BLOGS = gql`
    query getBlogs($first: Int, $after: String, $last: Int, $before: String) {
        blogs(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...blogFields
            }
        }
    }
    ${fragments.PAGE_INFO}
    ${fragments.BLOG}
`

export const BLOG  = gql`
    query getBlog($id: Int!) {
        blog(id: $id) {
            ...blogFields
        }
    }
    ${fragments.BLOG}
`