import React from "react";
import { Grid, Paper, Box, Typography, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

export default function Cards() {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={2}>
          <img
            src="https://picsum.photos/200/300"
            style={{ width: "100%", height: "5rem" }}
          />
          <Box p={1}>
            <Typography variant="subtitle1">Hello World</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon sx={{ width: 12 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                5 hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Rating
                name="read-only"
                value={2.5}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                2.5
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                (100 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C $150
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
