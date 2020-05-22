import React from "react";
import { auth } from "../Authentication/Firebase";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PageBar() {
  const classes = useStyles();
  const history = useHistory();

  const logoutUser = () => {
    auth.signOut();
    history.push("/signin");
  };

  function pushHome() {
    history.push("/");
  }

  function pushToSignUp() {
    history.push("/signup");
  }

  function pushProfile() {
    history.push("/profile");
  }

  function pushPost() {
    history.push("/createPost");
  }

  if (auth == null) {
    return (
      <>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h2" className={classes.title}>
                Imagio
              </Typography>
              <Button color="inherit" onClick={pushToSignUp}>
                Sign Up
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h2" className={classes.title}>
                Imagio
              </Typography>
              <Button color="inherit" onClick={pushPost} size="large">
                {" "}
                Post{" "}
              </Button>
              <Button color="inherit" onClick={pushProfile} size="large">
                {" "}
                Profile{" "}
              </Button>
              <Button color="inherit" onClick={pushHome} size="large">
                {" "}
                Home{" "}
              </Button>
              <Button color="inherit" onClick={logoutUser}>
                Sign Out
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </>
    );
  }
}
