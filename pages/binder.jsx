import React, { useEffect, useState, useReducer, useContext } from "react";
import { Typography, Grid, Button, CircularProgress } from "@mui/material";
import { Store } from "/utils/globalStore.js";
import BinderCard from "@components/BinderCard";
import Router from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import PokeModal from "@components/pokeModal";

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
  const [cardCollection, setCardCollection] = useState([]);

  const { state } = useContext(Store);
  const { userInfo } = state || {};
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    cardCollection: {},
    error: "",
  });
  const { modalControl } = state;

  useEffect(() => {
    if (!userInfo) {
      Router.push("/login");
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

  const deleteCard = async (id) => {
    try {
      const { data } = await axios.delete(`/api/binder/delete/${id}`, {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      });
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
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err.message });
      console.log(err);
    }
  };
  return (
    <>
      <Grid
        container
        item
        sm={12}
        lg={6}
        display="flex"
        justifyContent="flex-end"
      >
        <Typography mr="2em" variant="h3">
          My Binder
        </Typography>
        <Grid
          container
          item
          spacing={1}
          sx={{
            ml: { xs: "2em", sm: "20em", md: "30em" },
          }}
        >
          {cardCollection?.length > 0 &&
            cardCollection.map((card, i) => (
              <Grid item xs={12} md={4} lg={4} key={i}>
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
                  <BinderCard
                    _id={card._id}
                    handleDelete={deleteCard}
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
      {modalControl && <PokeModal />}
    </>
  );
};

export default dynamic(() => Promise.resolve(BinderPage), { ssr: false });
