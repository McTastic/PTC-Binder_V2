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

const { publicRuntimeConfig } = getConfig();

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, results: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

const ImgMediaCard = () => {
  const { state } = useContext(Store);
  const [{ loading, results, error }, dispatch] = useReducer(reducer, {
    loading: true,
    results: {},
    error: "",
  });
  const { id, name, description, image } = results;
  const key = publicRuntimeConfig.POKE_KEY;
  useEffect(() => {
    const fetchResults = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(
          "https://api.pokemontcg.io/v2/cards/xy1-1",
          {
            headers: { "x-api-key": key },
          }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err });
      }
    };
    fetchResults();
  }, []);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="h6" color="error">
          {" "}
          {error}{" "}
        </Typography>
      ) : (
        <Grid>
          <Card sx={{ maxWidth: 345, margin: "auto" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(ImgMediaCard), {
  ssr: false,
});
