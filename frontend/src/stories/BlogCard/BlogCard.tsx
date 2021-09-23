import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, CardHeader, Divider, Grid, Modal } from "@material-ui/core";
import makeBlogCardStyles from "./BlogCardStyles";


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
    
      <Card className={styles.card} style={{height:"100%"}}variant={"outlined"}>
        <CardActionArea className={styles.wrapper}>
          <CardHeader className={styles.header} title={Name} variant="h1" />
          <Divider className={styles.divider} />
          <CardContent>
            <Grid container>
            <Grid xs={12} sm={6}>
              <Typography> {BlogId} </Typography>
              <Typography> {Author} </Typography>
              <Typography> {Location} </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <img width="100px" src={ImageUrl} alt={Name}></img>
              <Typography> Positive = {Positive} Negative= {Negative}</Typography>
            </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>

  );
};

  export interface innerPopUpProp{
    CardButton: JSX.Element
    PopUp: JSX.Element 
  }
  export const CardPopUp = ({CardButton, PopUp}: innerPopUpProp) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid xs={12} sm={6} md={3} onClick={handleOpen}>{CardButton}</Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >{PopUp}
      </Modal>
    </>
  );
}

export default BlogCard;


