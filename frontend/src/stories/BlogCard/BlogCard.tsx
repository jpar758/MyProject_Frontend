import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, CardHeader, Divider } from "@material-ui/core";
import makeBlogCardStyles from "./BlogCardStyles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface BlogCardProp {
  BlogId: string;
  Name: string;
  Author: string;
  ImageUrl: string;
  Description: string;
  Location: string;
  Positive: number;
  Negative: number;
}

const BlogCard = ({
  BlogId,
  Name,
  Author,
  ImageUrl,
  Description,
  Location,
  Positive,
  Negative,
}: BlogCardProp): JSX.Element => {
  const styles = makeBlogCardStyles();

  return (
    <div>
      <Card className={styles.card} variant={"outlined"}>
        <CardActionArea className={styles.wrapper}>
          <CardHeader className={styles.header} title={Name} />
          <Divider className={styles.divider} />
          <CardContent>
            {BlogId}
            {Author}
            {Location}
            {Positive}
            {Negative}
            {Description}
            <img width="100px" src={ImageUrl} alt={Name}></img>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default BlogCard;
