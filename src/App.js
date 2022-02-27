import * as React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  ButtonGroup,
  CssBaseline,
  Typography,
  Paper,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import useStyles from "./style";
import Cards from "./Cards";

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <div style={{ marginBottom: "20px" }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <div>
                    <Button variant="contained" color="success">
                      See my photos
                    </Button>
                  </div>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Example2 */}
            <Grid container spacing={4}>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}
