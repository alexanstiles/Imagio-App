import React from "react";
import {AppBar, 
        Toolbar, 
        Typography, 
        Button, 
        makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
      },

}));

export default function PageBar() {
  const classes = useStyles(); 

  let history = useHistory();

  function pushHome() {
    history.push("/");
  }

  function pushProfile() {
    history.push("/profile");
  }

  function pushPost() {
    history.push("/createPost");
  }

  return (
    <>
    <div className={classes.root}> 
      <AppBar position="static">
        <Toolbar>
              <Typography variant="h2" className={classes.title}>
                Imagio App
              </Typography>
              <Button color= 'inherit' onClick={pushPost} size="large">  Post </Button>
              <Button color= 'inherit' onClick={pushProfile} size="large">  Profile </Button>
              <Button color= 'inherit' onClick={pushHome} size="large"> Home </Button>
              <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}
