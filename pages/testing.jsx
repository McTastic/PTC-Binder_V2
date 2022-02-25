import React, { useState, useEffect, useContext, useReducer } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import dynamic from "next/dynamic";
import { Store } from "/utils/globalStore";
import { CircularProgress } from "@mui/material";
import getConfig from "next/config";
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
  // const key = publicRuntimeConfig.POKE_KEY;
  useEffect(() => {
    const fetchResults = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const results = await axios.get("/api/search/cards", {
          // headers: { "X-Api-Key": key },
        });
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
            <>
              {data.data.data.map((card, index) => (
                <ResultCard
                  key={index}
                  id={card.id}
                  image={card.images.large}
                  type={card.types[0].toLowerCase()}
                />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default dynamic(() => Promise.resolve(ImgMediaCard), {
  ssr: false,
});
