import React, { useContext, useState } from "react";
import NavBar from "../Container/NavBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { UserContext } from "../Authentication/UserProvider";
import { firestore, imageStorage } from "../Authentication/Firebase";
import FileUploader from "react-firebase-file-uploader";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreatePost() {
  const { uid } = useContext(UserContext);
  const classes = useStyles();
  const [caption, setCaption] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleUploadSuccess = (filename) => {
    imageStorage
      .ref(uid)
      .child(filename)
      .getDownloadURL()
      .then((url) => setImageURL(url));
    console.log(imageURL);
  };

  function addPost(event) {
    event.preventDefault();
    console.log("this is ");
    firestore
      .collection("posts")
      .doc("insertimagehere")
      .set({
        caption: caption,
        id: uid,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  function handleChange(event) {
    event.preventDefault();
    setCaption(event.target.value);
  }

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create A Post
          </Typography>
          <form className={classes.form} noValidate onSubmit={addPost}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img alt="random" src={imageURL}></img>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="caption"
                  label="Caption"
                  name="caption"
                  autoComplete="caption"
                  value={caption}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <FileUploader
              accept="image/*"
              name="postImage"
              randomizeFilename
              storageRef={imageStorage.ref(uid)}
              onUploadSuccess={handleUploadSuccess}
            />
            <Button
              type="upload"
              fullWidth
              variant="contained"
              color="inherit"
              className={classes.submit}
              onClick={addPost}
            >
              Upload Image
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create Post
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
