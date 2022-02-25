import React from "react";
import { Button, Card, CardMedia, CardContent } from "@mui/material";
import theme from "/styles/theme.js";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function ResultCard(props) {
  return (
    <Grid
      item
      id={`${props.id}-card`}
      position="relative"
      sx={{
        height: "15em",
        width: "10em",
        m: ".5em",
        backgroundColor: "rgba(107, 181, 241, .5)",
        transition: "transform .5s, position .5s, opacity .5s, height .5s ease-out",
        "&:hover": {
          boxShadow: `2px 2px 20px 5px ${theme.palette.types[props.type]}`,
          transform: "scale(1.1)",
          button: {
            opacity: "1",
            display: "block",
          },
        },
      }}
    >
      {/* <CardMedia
          component="img"
          className="card"
          alt="green iguana"
          image={props.image}
          sx={{
            height: "15em",
            width: "10em",
            padding: "5px"
          }}
        /> */}
      <Image
        src={props.image}
        alt={`${props.name} card`}
        height="15em"
        width="10em"
        layout="responsive"
        style={{
          padding: "5px",
        }}
      />
      {/* <CardContent sx={{ textAlign: "center" }}> */}
      {/* <Image src={image} alt="pokemon picture" layout="responsive" height="12em"width="8em"/> */}
      <Button
        variant="contained"
        id={`${props.id}-button`}
        fullWidth
        sx={{
          opacity: "0",
          transition: "opacity .5s",
          position: "relative",
          top: "-3em",
        }}
      >
        Add
      </Button>
      {/* </CardContent> */}
    </Grid>
  );
}
