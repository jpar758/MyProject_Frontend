import React, { useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "../Button";
import { AddBlogVariables } from "../../api/__generated__/AddBlog";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
}));
export interface SubmitFormProps {
 mutationFunction : (args:{variables:AddBlogVariables}) => void
}



export const SubmitForm: React.FC<SubmitFormProps> = ({mutationFunction}) => {
  const classes = useStyles();
  const [authorName, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [shopName, setShopName] = useState<string>("");
  const [shopLocation, setLocation] = useState<string>("");
  const [description, setDescription] = useState("");

  const [submit, setSubmit] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  
  const handleSubmit = async () => {
    console.log("hello")
    await mutationFunction ({variables:{
      name: shopName,
      author: authorName,
      address: shopLocation,
      description: description,
      imageUrl:imageUrl
    }} )
    window.location.reload()
  };

  const isImageUrl = (value: string) => {
    const urlRegex =
    /(https?:\/\/.*\.(?:png|jpg))/i;
    return urlRegex.test(value);
  }


  return (
    <Container className="form_container">
      <Typography variant="h4">Share Your Go-to</Typography>
      {submit ? (
        <Grid>
          Thank you for sharing your food place
        </Grid>
      ) : null}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Author Name"
            fullWidth
            error={hasFocus && authorName === ""}
            value={authorName}
            className={hasFocus && authorName === "" ? "" : classes.root}
            helperText="Invalid Author Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Restaurent Name "
            fullWidth
            error={hasFocus && (shopName === "")}
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            className={hasFocus && shopName === "" ? "" : classes.root}
            helperText="Invalid Restaurent Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Image URL"
            fullWidth
            error={hasFocus && (imageUrl === "" || !isImageUrl(imageUrl))}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className={hasFocus && (imageUrl === "" || !isImageUrl(imageUrl))?"":classes.root}
            helperText="Invalid URL"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Shop Location "
            fullWidth
            error={hasFocus && (shopLocation === "")} 
            value={shopLocation}
            onChange={(e) => setLocation(e.target.value)}
            className={hasFocus && shopLocation === "" ? "" : classes.root}
            helperText="Invalid Shop location"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            label="Share your favourite menu and your opinion"
            multiline
            rows={5}
            placeholder="My favourite menu from here is..."
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        className="form_button"
        backgroundColor="limegreen"
        label="Share Now"
        onClick={handleSubmit}
        primary
        size="medium"
      />
    </Container>
  );
};