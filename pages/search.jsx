import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { Store } from "/utils/globalStore";
import { Controller, useForm } from "react-hook-form";

export default function TextFieldHiddenLabel() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const submitForm = async ({ query }) => {
    try {
      const { data } = await axios.post("/api/users/register", {
        firstName,
        lastName,
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (error) {
      enqueueSnackbar(
        err.response.data ? err.response.data.message : err.message,
        { variant: "error" }
      );
    }
  };

  return (
    <>
      <Stack
        component="form"
        onSubmit={submitForm}
        sx={{
          width: "25ch",
          margin: "auto",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
        />
        <Button variant="contained" onClick={submitForm}>
          Search
        </Button>
      </Stack>
    </>
  );
}
