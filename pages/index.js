import { Typography, Grid, Box, Container } from "@mui/material";
import Carousel from "@components/carousel";

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={10}
        md={6}
        lg={6}
        align="center"
        sx={{
          ml: { xs: "1em", sm: "15em", md: "20em", lg: "40em" },
        }}
      >
        <Container
        sx={{
          display: "flex",
          flexDirection:{xs:"column", xl:"row"},
          justifyContent: "center",
          alignItems:"center",
          backgroundColor: "rgb(6,24,54)",
          boxShadow: "10px -5px 4px white, -10px 5px 4px red",
          // border: "solid red 3px",
          margin: "1rem"
        }}
        >
        <Typography 
        variant="h3"
        marginRight={4}
        sx={{
          fontWeight: "bold"
        }}
        >
          Welcome to PTC Binder!</Typography>
        <Typography 
        variant="p"
        sx={{
          letterSpacing:"1px",
        }}
        >Please feel free to take a look around! Here you can search for any existing Pokemon<sup>&reg;</sup> card and add it to a virtual database for tracking! Please see the carousel below for some instructions on how to use our site. Thank you and have a great day!</Typography>
        </Container>
        <Box
          sx={{
            backgroundColor: "rgb(6,24,54)",
            marginTop:"3em",
            marginBottom:"5em",
            boxShadow: "10px -5px 4px white, -10px 5px 4px red",
            height: {xs:"75vh",md:"55vh"},
            width: {xs:"90vw",xl:"35vw"},
          }}
        >
          <Carousel />
        </Box>
      </Grid>
    </Grid>
  );
}
