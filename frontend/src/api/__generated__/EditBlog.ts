/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditBlog
// ====================================================

export interface EditBlog_editBlog {
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

export interface EditBlog {
  editBlog: EditBlog_editBlog;
}

export interface EditBlogVariables {
  blogId: number;
  positive: number;
  negative: number;
}
