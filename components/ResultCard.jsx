import React, { useState, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import theme from "/styles/theme.js";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Store } from "../utils/globalStore";
import axios from "axios";

export default function ResultCard(props) {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const modalOpenHandler = () => {
    dispatch({ type: "OPEN_MODAL" });
    getModalData();
  };

  const getModalData = async () => {
    try {
      const { data } = await axios.get(`/api/search/id/${props.id}`);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      dispatch({ type: "SET_MODAL_DATA", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err });
      console.log(err);
    }
  };
  const addHandler = async () => {
    try {
      const { data } = await axios.post(
        "/api/binder/add",
        {
          api_id: props.id,
          image_url: props.image,
          name: props.name,
          card_type: props.type,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "ADD_TO_BINDER", payload: { data } });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Grid
        item
        id={`${props.id}-card`}
        position="relative"
        className="pokeCard"
        sx={{
          height: { xs: "24em", lg: "15em" },
          width: { xs: "16em", lg: "10em" },
          m: { xs: ".5em 1em .5em 1em", lg: ".5em" },
          backgroundColor: "rgba(107, 181, 241, .5)",
          transition:
            "transform .5s, position .5s, opacity .5s, height .5s ease-out",
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
        <Image
          // onClick={} <<< somehow do modal
          src={props.image}
          alt={`${props.name} card`}
          height="15em"
          width="10em"
          layout="responsive"
          onClick={modalOpenHandler}
        />
        <Button
          variant="contained"
          onClick={addHandler}
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
      </Grid>
    </>
  );
}
