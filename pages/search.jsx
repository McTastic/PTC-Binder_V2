import React, { useContext, useState, useReducer } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Store } from "/utils/globalStore";
import { Controller, useForm } from "react-hook-form";
import ResultCard from "@components/ResultCard";
import { Box, CircularProgress } from "@mui/material";
import PokeModal from "@components/pokeModal";
import theme from "/styles/theme.js";
import IconButton from '@mui/material/IconButton';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

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
export default function TextFieldHiddenLabel() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [{ loading, data, error }, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
    error: "",
  });
  const { state } = useContext(Store);

  const [results, setResults] = useState([]);
  const { modalControl } = state;

  const submitForm = async ({ search }) => {
    try {
      dispatch({ type: "FETCH_REQUEST" });
      const { data } = await axios.get(`/api/search/${search}`);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      // console.log(data);
      reset({
        data: "search",
      });
      setResults({ ...data });
      // console.log(results);
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err });
      console.log(err);
    }
  };

  return (
    <>
      <Stack
        component="form"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        flexDirection="row"
        onSubmit={handleSubmit(submitForm)}
        sx={{
          width: {xs: "45ch",md:"75ch"},
          margin: "auto",
          "&:hover": {
            outline: "none",
            borderColor: "none",
          },
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <Controller
          name="search"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="outlined"
              fullWidth
              id="search"
              label="Search"
              inputProps={{ type: "text" }}
              {...field}
              sx={{
                mt: "2em",
                backgroundColor: "rgba(60, 200, 255,.5)",
                borderRadius: "1.625rem",
                marginBottom:"2em",
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderRadius: "1.675rem",
                  },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "light-blue",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "blue",
                  },
                },
              }}
            ></TextField>
          )}
        ></Controller>

        <IconButton  type="submit"  color="error">
          <CatchingPokemonTwoToneIcon sx={{fontSize:"50px", position: "relative", bottom: "9px"}} />
        </IconButton>
      </Stack>
      <Grid container item>
        {results?.data?.length > 0 &&
          results.data.map((card, i) => (
            <Grid item key={i} ml={4}>
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
                ></Grid>
              ) : (
                <ResultCard
                  id={card.id}
                  image={card.images.large}
                  type={
                    card?.types?.length > 0
                      ? card.types[0].toLowerCase()
                      : "none"
                  }
                  name={card.name}
                />
              )}
            </Grid>
          ))}
      </Grid>
      {modalControl && <PokeModal />}
    </>
  );
}
