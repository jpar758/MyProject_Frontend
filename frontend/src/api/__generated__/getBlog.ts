/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBlog
// ====================================================

export interface getBlog_blog {
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

export interface getBlog {
  blog: getBlog_blog;
}

export interface getBlogVariables {
  id: number;
}
