import React, { useEffect, useState, useReducer, useContext } from "react";
import { Typography, Grid, Button, CircularProgress } from "@mui/material";
import { Store } from "/utils/globalStore.js";
import ResultCard from "@components/ResultCard";
import Router from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        cardCollection: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

const BinderPage = () => {
  const { state } = useContext(Store);
  const { userInfo } = state || {};
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    cardCollection: {},
    error: "",
  });

  const [cardCollection, setCardCollection] = useState([]);
  useEffect(() => {
    if (!userInfo) {
      Router.push("/");
    }
    const getCards = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get("/api/binder/cards", {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data.cardCollection });
        setCardCollection(data.cardCollection);
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
        console.log(err);
      }
    };
    getCards();
  }, [userInfo]);

  console.log(cardCollection);
  return (
    <Grid container spacing={3} display="flex" justifyContent="center">
      <Typography variant="h4">Binder</Typography>
      <Grid container item xs={12} spacing={3} ml={40}>
        {cardCollection?.length > 0 &&
          cardCollection.map((card, i) => (
            <Grid item xs={12} key={i} ml={4}>
              {loading ? (
                <Grid
                  item
                  id={`blank-card`}
                  position="relative"
                  sx={{
                    height: "15em",
                    width: "10em",
                    m: ".5em",
                    backgroundColor: "rgba(107, 181, 241, .5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress position="relative" m="auto" />
                </Grid>
              ) : (
                <ResultCard
                  id={card.api_id}
                  image={card.image_url}
                  type={card.card_type}
                  name={card.name}
                />
              )}
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(BinderPage), { ssr: false });
