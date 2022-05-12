import { Typography, Grid, Box, Container } from "@mui/material";
import PokeBall from "@components/PokeBall";

export default function Home() {
  return (
    <Grid item >
      <Grid
        item
        xs={10}
        md={6}
        lg={5}
        align="left"
        sx={{
          ml:{md:"6em"},
          mt:{md: "2em"}
        }}
      >
        <Container
          sx={{
            // backgroundColor: "rgba(6,24,54,.1)",
            // boxShadow: "40px -15px 4px white, -40px 15px 4px red",
            // border: "solid red 3px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
            }}
          >
            PTC Binder
          </Typography>
          <Typography
            sx={{
              fontSize:{xs:"80px",xl:"125px"},
              letterSpacing: "1px",
              lineHeight:"1.25",
              marginTop:"1em",
              marginBottom:".25em",
              textShadow:"2px 2px 8px black",
              width: {xl:"85%"},
            }}
          >
            Your digital<br/>
            <span
              style={{
                padding:"0 5px 0 5px",
                backgroundImage: "linear-gradient(.2turn,rgb(255, 230, 75),rgb(249,210,1),rgb(255, 230, 75))",
                backgroundSize: "100% 0.2em",
                backgroundPosition: "0 95%",
                backgroundRepeat: "no-repeat",
              }}
            >
              Pok&eacute;mon
            </span>
            <sup style={{fontSize:"40px"}}>&reg;</sup> trading card database.
          </Typography>
          <Typography variant="p" sx={{color:"rgba(180,180,180,.6)", fontSize:"26px"}}>
            Let us keep things organized for you
          </Typography>
        </Container>
      </Grid>
      <PokeBall />
    </Grid>
  );
}
