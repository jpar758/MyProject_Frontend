import React from "react";
import { Button, Grid } from "@material-ui/core";
import "./App.css";
import ProjectHeader from "./stories/ProjectHeader/ProjectHeader";
import { Footer } from "./stories/Footer/Footer";
import { SubmitForm } from "./stories/SubmitForm/SubmitForm";
import PopUp from "./stories/PopUp/PopUp";
import { Route, Switch } from "react-router";
import { HomePage } from "./stories/Pages/Homepage";
import { SubmitPage } from "./stories/Pages/SubmitPage";
import { useMutation, useQuery } from "@apollo/client";
import { getBlogs } from "./api/__generated__/getBlogs";
import { BLOGS } from "./api/queries";
import BlogCard, { CardPopUp } from "./stories/BlogCard/BlogCard";
import { ADD_BLOG, EDIT_BLOG } from "./api/mutations";
import { AddBlog } from "./api/__generated__/AddBlog";
import BlogCardDetail from "./stories/BlogCardDetails/BlogCardDetail";
import { EditBlog } from "./api/__generated__/EditBlog";

function App() {
  const { loading, data, fetchMore } = useQuery<getBlogs>(BLOGS);

  const [mutateFunction] = useMutation<AddBlog>(
    ADD_BLOG
  );

  const [updateMutateFunction] = useMutation<EditBlog>(
    EDIT_BLOG,
      {refetchQueries:[BLOGS]}
  );






  if (loading) return <p>loading..</p>;

  const loadMore = () => {
    console.log(data?.blogs)
    if (!data?.blogs?.pageInfo.hasNextPage){
      alert("No next page")
      return
    }
    fetchMore({
      variables: {
        after: data?.blogs?.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const prevNodes=prev?.blogs?.nodes || []
        const newNodes =fetchMoreResult?.blogs?.nodes || []
        const prevEdges=prev?.blogs?.edges || []
        const newEdges =fetchMoreResult?.blogs?.edges || []
        return Object.assign({}, prev, {
          blogs: {
            edges: [...prevEdges, ...newEdges],
            nodes: [...prevNodes, ...newNodes],
            pageInfo : fetchMoreResult?.blogs?.pageInfo
          },
        });
      },
    });
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
      <ProjectHeader></ProjectHeader>
      <Grid container>
        {data?.blogs?.nodes?.map((Blog) => (
          <CardPopUp CardButton={<BlogCard
            BlogId={Blog.blogId}
            Name={Blog.name}
            Author={Blog.author}
            ImageUrl={Blog.imageUrl}
            Description={Blog.description}
            Location={Blog.address}
            Positive={Blog.positive}
            Negative={Blog.negative}
          />} PopUp={<BlogCardDetail
            mutationFunction={updateMutateFunction}
            BlogId={Blog.blogId}
            Name={Blog.name}
            Author={Blog.author}
            ImageUrl={Blog.imageUrl}
            Description={Blog.description}
            Location={Blog.address}
            Positive={Blog.positive}
            Negative={Blog.negative}
          />}/>
        ))}
      </Grid>
      <Footer></Footer>
      <PopUp>
        <SubmitForm mutationFunction={mutateFunction} />
      </PopUp>
      <Button onClick={loadMore}>Load More</Button>
    </div>
  );
}
export default App;
