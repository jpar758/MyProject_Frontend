import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CardActionArea,
  CardHeader,
  Divider,
  Grid,
} from "@material-ui/core";
import makeBlogCardStyles from "./BlogCardStyles";
import { EditBlogVariables } from "../../api/__generated__/EditBlog";

export interface BlogCardDetailProp {
  BlogId: string;
  Name: string;
  Author: string;
  ImageUrl: string;
  Description: string;
  Location: string;
  Positive: number;
  Negative: number;
  mutationFunction : (args:{variables:EditBlogVariables}) => void;
}

const BlogCardDetail = ({
  BlogId,
  Name,
  Author,
  ImageUrl,
  Description,
  Location,
  Positive,
  Negative,
  mutationFunction
}: BlogCardDetailProp): JSX.Element => {
  const styles = makeBlogCardStyles();
  const upVote = () =>{
    mutationFunction({variables: {blogId : Number(BlogId), positive : 1 , negative: 0}})
  } 
  const downVote = () =>{
    mutationFunction({variables: {blogId : Number(BlogId), positive : 0 , negative: -1}})
  } 
  return (
    <Card
      className={styles.card}
      style={{ height: "100%" }}
      variant={"outlined"}
    >
      <CardActionArea className={styles.wrapper}>
        <CardHeader className={styles.header} title={Name} variant="h1" />
        <Divider className={styles.divider} />
        <CardContent>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Typography> {BlogId} </Typography>
              <Typography> {Author} </Typography>
              <Typography> {Location} </Typography>
              <Typography> {Description} </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <img width="100px" src={ImageUrl} alt={Name}></img>
              <Typography>
                {" "}
                Positive = {Positive} Negative= {Negative}
              </Typography>
            </Grid>
          </Grid>
          <Button onClick= {upVote}>Agree</Button>
          <Button onClick={downVote}>Disagree</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default BlogCardDetail;
