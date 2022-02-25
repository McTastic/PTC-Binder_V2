import React, { useContext, useState, useReducer } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { Store } from "/utils/globalStore";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

export default function TextFieldHiddenLabel() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const submitForm = async ({ query }) => {
    try {
      const { data } = await axios.get("/api/search/cards", {
        headers: { query: query },
      });
      console.log(data);
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
          name="query"
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
    </>
  );
}
