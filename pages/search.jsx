import React, { useContext, useState, useReducer } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";
import { useRouter } from "next/router";
import { Store } from "/utils/globalStore";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import ResultCard from "@components/ResultCard";

export default function TextFieldHiddenLabel() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const [results, setResults] = useState([]);

  const submitForm = async ({ search }) => {
    try {
      const { data } = await axios.get(`/api/search/${search}`);
      // console.log(data);
      reset({
        data: "search",
      });
      setResults({ ...data });
      console.log(results);
    } catch (err) {
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
      {results?.data?.length > 0 ? (
        <Container>
          {results.data.map((card, i) => (
            <ResultCard
              key={i}
              id={card.id}
              image={card.images.large}
              type={card.types[0].toLowerCase()}
              name={card.name}
            />
          ))}
        </Container>
      ) : null}
    </>
  );
}
