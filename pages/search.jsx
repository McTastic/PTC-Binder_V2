import React, { useContext, useState, useReducer } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useRouter } from "next/router";
import { Store } from "/utils/globalStore";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import ResultCard from "@components/ResultCard";
import { CircularProgress } from "@mui/material";

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

  const submitForm = async ({ search }) => {
    try {
      dispatch({ type: "FETCH_REQUEST" });
      const { data } = await axios.get(`/api/search/${search}`, {});
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      // console.log(data);
      reset({
        data: "search",
      });
      setResults({ ...data });
      console.log(results);
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err });
      console.log(err);
    }
  };

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(submitForm)}
        sx={{
          width: "25ch",
          margin: "auto",
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
            ></TextField>
          )}
        ></Controller>

        <Button variant="contained" type="submit" fullWidth color="primary">
          Search
        </Button>
      </Stack>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="h6" color="error">
          {" "}
          {error}{" "}
        </Typography>
      ) : (
        results?.data?.length > 0 && (
          <Grid container>
            {results.data.map((card, i) => (
              <Grid item key={i} ml={5}>
                <ResultCard
                  id={card.id}
                  image={card.images.large}
                  type={card?.types?.length >0 ? card.types[0].toLowerCase():"none"}
                  // type={card.types[0].toLowerCase()}
                  name={card.name}
                />
              </Grid>
            ))}
          </Grid>
        )
      )}
    </>
  );
}
