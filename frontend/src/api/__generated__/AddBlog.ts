/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBlog
// ====================================================

export interface AddBlog_addBlog {
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

export interface AddBlog {
  addBlog: AddBlog_addBlog;
}

export interface AddBlogVariables {
  name: string;
  author: string;
  description: string;
  imageUrl: string;
  address: string;
}
