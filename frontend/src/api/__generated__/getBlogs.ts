/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBlogs
// ====================================================

export interface getBlogs_blogs_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface getBlogs_blogs_edges {
  __typename: "BlogEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface getBlogs_blogs_nodes {
  __typename: "Blog";
  blogId: string;
  name: string;
  address: string;
  description: string;
  author: string;
  positive: number;
  negative: number;
  imageUrl: string;
}

export interface getBlogs_blogs {
  __typename: "BlogConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: getBlogs_blogs_pageInfo;
  /**
   * A list of edges.
   */
  edges: getBlogs_blogs_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: getBlogs_blogs_nodes[] | null;
}

export interface getBlogs {
  blogs: getBlogs_blogs | null;
}

export interface getBlogsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
