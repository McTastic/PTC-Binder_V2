import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useContext } from "react";
import NextLink from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { Store } from "/utils/globalStore";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push("");
    }
  }, []);

  const submitHandler = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      console.log("passwords do not match");
      return;
    }
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Grid container display="flex" justifyContent={"center"}>
        <Grid item xs={8} sm={6} lg={4}
        sx={{
          backgroundColor:"rgb(6,24,54)",
          boxShadow: "10px -5px 4px white, -10px 5px 4px red",
        }}
        >
          <Typography component="h1" variant="h1" textAlign={"center"}>
            Register
          </Typography>
          <List>
            <ListItem>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    error={Boolean(errors.firstName)}
                    helperText={
                      errors.firstName
                        ? errors.firstName.type === "minLength"
                          ? "First name must be at least 2 characters"
                          : "This field is required"
                        : ""
                    }
                    id="firstName"
                    label="First Name"
                    inputProps={{ type: "text" }}
                    {...field}
                    sx={{
                      backgroundColor:"rgba(60, 200, 255,.5)"
                    }}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    error={Boolean(errors.lastName)}
                    helperText={
                      errors.lastName
                        ? errors.lastName.type === "minLength"
                          ? "Last name must be at least 2 characters"
                          : "This field is required"
                        : ""
                    }
                    id="lastName"
                    label="Last Name"
                    inputProps={{ type: "text" }}
                    {...field}
                    sx={{
                      backgroundColor:"rgba(60, 200, 255,.5)"
                    }}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === "pattern"
                          ? "Invalid email"
                          : "This field is required"
                        : ""
                    }
                    id="email"
                    label="Email"
                    inputProps={{ type: "email" }}
                    {...field}
                    sx={{
                      backgroundColor:"rgba(60, 200, 255,.5)"
                    }}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === "minLength"
                          ? "Password must be at least 6 characters"
                          : "This field is required"
                        : ""
                    }
                    id="password"
                    label="Password"
                    inputProps={{ type: "password" }}
                    {...field}
                    sx={{
                      backgroundColor:"rgba(60, 200, 255,.5)"
                    }}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    error={Boolean(errors.confirmPassword)}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.type === "minLength"
                          ? "Password must be at least 6 characters"
                          : "This field is required"
                        : ""
                    }
                    id="confirmPassword"
                    label="Confirm Password"
                    inputProps={{ type: "password" }}
                    {...field}
                    sx={{
                      backgroundColor:"rgba(60, 200, 255,.5)"
                    }}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{
                  fontSize:"1.25em",
                  margin:"auto",
                  width: "10em",
                  color: "black",
                  letterSpacing:"2px",
                  backgroundColor:"rgb(5,200,200)"
                }}
              >
                Register
              </Button>
            </ListItem>
            <ListItem>
              Back to&nbsp;
              <NextLink href={`/login`} passHref>
                <Link>login</Link>
              </NextLink>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </form>
  );
}
