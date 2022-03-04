import React from "react";
import Grid from "@mui/material/Grid";

export default function PokeLoaderTest() {
    return (
      <Grid ml={40}>
      <Grid sx={{
        display: "flex",
        height: "100%",
        justifyContent:"center",
        alignItems:"center",
      }}>
      <div className="pokeLoader"
      style={{
        position: "relative"
      }}
      ></div>
      </Grid>
      </Grid>
    );
  }
  