import {
  Button,
  Box,
  Grid,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import NextLink from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { Store } from "../utils/globalStore";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
  //  Form controls from react-hook-form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  //  Error and success messageing

  // Handiling routing
  const router = useRouter();
  // const { redirect } = router.query; //login

  // Managing state will need to add context and userInfo later
  const { dispatch } = useContext(Store);

  // Function on sunbmit

  const submitHandler = async ({ email, password }) => {
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      // dispatch is from react context will need need to create a gloabl store.
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      // right now we redirect to the home page. we might want to redirect to a profile page if we make one.
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          xs={8}
          lg={4}
          sx={{
            backgroundColor: "rgb(6,24,54)",
            boxShadow: "10px -5px 4px white, -10px 5px 4px red",
          }}
        >
          <Typography
            component="h1"
            textAlign={"center"}
            sx={{ fontSize: "75px" }}
          >
            Login
          </Typography>
          <List>
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
                    InputLabelProps={{ style: { fontSize: 22 } }}
                    {...field}
                    sx={{
                      backgroundColor: "rgba(60, 200, 255,.5)",
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
                    InputLabelProps={{ style: { fontSize: 22 } }}
                    {...field}
                    sx={{
                      backgroundColor: "rgba(60, 200, 255,.5)",
                    }}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                size="large"
                type="submit"
                color="primary"
                style={{
                  fontSize: "1.25em",
                  margin: "auto",
                  width: "10em",
                  color: "black",
                  letterSpacing: "2px",
                  backgroundColor: "rgb(5,200,200)",
                }}
              >
                Login
              </Button>
            </ListItem>
            <ListItem>
              New Here?&nbsp;
              <NextLink href={`/register`} passHref>
                <Link>Register Here!</Link>
              </NextLink>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </form>
  );
}
