import React from "react";
import { Button, Card, CardMedia, CardContent } from "@mui/material";
import theme from "/styles/theme.js";

export default function ResultCard(props) {
  return (
    <>
      <Card
        id={`${props.id}-card`}
        sx={{
          margin: "auto",
          width: "14em",
          height: "19.25em",
          backgroundColor: "rgba(107, 181, 241, .5)",
          transition: "opacity .5s, height .5s",
          "&:hover": {
            boxShadow: `2px 2px 20px 5px ${theme.palette.types[props.type]}`,
            height: "23em",
            button: {
              opacity: "1",
              display: "block",
            },
          },
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          image={props.image}
          sx={{
            margin: "auto",
            padding: "5px",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            id={`${props.id}-button`}
            fullWidth
            sx={{
              transition: "opacity .5s",
              opacity: "0",
            }}
          >
            Add
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
