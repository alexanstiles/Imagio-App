import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { firestore } from "../Authentication/Firebase";
import { UserContext } from "../Authentication/UserProvider";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export default function ProfileCard() {
  const {
    uid,
    firstName,
    lastName,
    bioimp,
    websiteimp,
    countryimp,
  } = useContext(UserContext);
  const classes = useStyles();
  const [first, setFirst] = useState(firstName);
  const [last, setLast] = useState(lastName);
  const [bio, setBio] = useState(bioimp);
  const [website, setWebsite] = useState(websiteimp);
  const [country, setCountry] = useState(countryimp);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    if (name === "firstName") {
      setFirst(value);
    }
    if (name === "lastName") {
      setLast(value);
    }
    if (name === "Bio") {
      setBio(value);
    }
    if (name === "website") {
      setWebsite(value);
    }
    if (name === "country") {
      setCountry(value);
    }
  }

  function saveData() {
    try {
      firestore
        .collection("users")
        .doc(uid)
        .set({
          firstName: first,
          lastName: last,
          bioimp: bio,
          websiteimp: website,
          countryimp: country,
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    } catch {}
  }

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Personal Profile
          </Typography>
          <React.Fragment>
            <Typography variant="h5" gutterBottom></Typography>
            <br />
            <Typography variant="subtitle1">
              Provide some information about yourself so that others can get to
              know you!
            </Typography>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  value={first}
                  onChange={(event) => handleChange(event)}
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  value={last}
                  onChange={(event) => handleChange(event)}
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="Bio"
                  name="Bio"
                  label="Short Bio"
                  value={bio}
                  onChange={(event) => handleChange(event)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="website"
                  name="website"
                  label="Website"
                  value={website}
                  onChange={(event) => handleChange(event)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  value={country}
                  onChange={(event) => handleChange(event)}
                  fullWidth
                  autoComplete="shipping country"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  size="medium"
                  style={{ marginTop: 10 }}
                  disableElevation
                >
                  Upload profile picture
                </Button>
              </Grid>
              <Grid>
                <div style={{ marginTop: 125 }}></div>
              </Grid>
              <Grid container justify="center" alignItems="center" item xs={12}>
                <Button variant="contained" onClick={saveData}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </main>
    </>
  );
}
