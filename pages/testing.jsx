import React, { useState, useEffect, useContext, useReducer } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import dynamic from "next/dynamic";
import { Store } from "/utils/globalStore";
import { CircularProgress } from "@mui/material";
import getConfig from "next/config";
import theme from "/styles/theme.js";
import ResultCard from "@components/ResultCard";

const { publicRuntimeConfig } = getConfig();

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

const ImgMediaCard = () => {
  const { state } = useContext(Store);
  const [{ loading, data, error }, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
    error: "",
  });
  const key = publicRuntimeConfig.POKE_KEY;
  useEffect(() => {
    const fetchResults = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const results = await axios.get(
          "https://api.pokemontcg.io/v2/cards/xy1-1",
          {
            headers: { "x-api-key": key },
          }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: results });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err });
      }
    };
    fetchResults();
  }, []);

  return (
    <>
      <Grid container display="flex" justifyContent={"center"}>
        <Grid item xs={12} md={6} lg={4}>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Typography variant="h6" color="error">
              {" "}
              {error}{" "}
            </Typography>
          ) : (
            <ResultCard
              id={data.data.data.id}
              image={data.data.data.images.large}
              type={data.data.data.type}
            />
            // <Card
            //   sx={{
            //     margin: "auto",
            //     width: "14em",
            //     height: "19.25em",
            //     backgroundColor: "rgba(107, 181, 241, .5)",
            //     transition: "opacity .5s, height .5s",
            //     "&:hover": {
            //       boxShadow: `2px 2px 20px 5px ${theme.palette.types.grass}`,
            //       height: "23em",
            //       button: {
            //         opacity: "1",
            //         display: "block",
            //       },
            //     },
            //   }}
            // >
            //   <CardMedia
            //     component="img"
            //     alt="green iguana"
            //     image={data.data.data.images.large}
            //     sx={{
            //       margin: "auto",
            //       padding: "5px",
            //     }}
            //   />
            //   <CardContent sx={{ textAlign: "center" }}>
            //     <Button
            //       variant="contained"
            //       fullWidth
            //       sx={{
            //         transition: "opacity .5s",
            //         opacity: "0",
            //       }}
            //     >
            //       Add
            //     </Button>
            //   </CardContent>
            // </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default dynamic(() => Promise.resolve(ImgMediaCard), {
  ssr: false,
});
