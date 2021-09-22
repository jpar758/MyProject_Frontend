import { gql } from "@apollo/client";

export const BLOG = gql`
    fragment blogFields on Blog {
        blogId
        name
        address
        description
        author
        positive 
        negative
        imageUrl

    }
`;
export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;