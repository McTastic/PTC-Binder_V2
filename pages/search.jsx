import React, { useContext, useState, useReducer } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Store } from "/utils/globalStore";
import { Controller, useForm } from "react-hook-form";
import ResultCard from "@components/ResultCard";
import { Box, Typography } from "@mui/material";
import PokeModal from "@components/pokeModal";
import IconButton from "@mui/material/IconButton";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import PokeBallSVG from "../public/images/pokeball.svg";
import Image from "next/image";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

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
    register,
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchState, setSearchState] = useState("");

  const submitForm = async ({ searchInput }) => {
    const pageCount = currentPage;
    if (searchInput !== searchState.searchInput) {
      pageCount = 1;
      setCurrentPage(1);
    }
    try {
      dispatch({ type: "FETCH_REQUEST" });
      const { data } = await axios.get(
        `/api/search/${searchInput}/${pageCount}`
      );
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      // console.log(data);
      reset({
        data: "searchInput",
      });
      setResults({ ...data });
      // console.log(results);
      setSearchState({ searchInput });
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err });
      console.log(err);
    }
  };

  return (
    <>
      {!searchState ? (
        <Stack
          component="form"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          flexDirection="row"
          position="relative"
          top="20em"
          onSubmit={handleSubmit(submitForm)}
          sx={{
            width: { xs: "45ch", md: "75ch" },
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
            name="searchInput"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                {...register("searchInput")}
                id="searchInput"
                label="Search"
                inputProps={{ type: "text" }}
                {...field}
                sx={{
                  backgroundColor: "rgba(60, 200, 255,.5)",
                  borderRadius: "1.625rem",
                  marginBottom: "2em",
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
          <IconButton
            type="submit"
            sx={{ position: "relative", bottom: "25px" }}
          >
            <Image
              src={PokeBallSVG}
              alt="pokeball icon"
              height="50px"
              width="50px"
            />
          </IconButton>
        </Stack>
      ) : (
        <Stack
          component="form"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          flexDirection="row"
          onSubmit={handleSubmit(submitForm)}
          sx={{
            width: { xs: "45ch", md: "75ch" },
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
            name="searchInput"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                {...register("searchInput")}
                id="searchInput"
                label="Search"
                inputProps={{ type: "text" }}
                {...field}
                sx={{
                  backgroundColor: "rgba(60, 200, 255,.5)",
                  borderRadius: "1.625rem",
                  marginBottom: "2em",
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
          <IconButton
            type="submit"
            sx={{ position: "relative", bottom: "25px" }}
          >
            <Image
              src={PokeBallSVG}
              alt="pokeball icon"
              height="50px"
              width="50px"
            />
          </IconButton>
        </Stack>
      )}
      <Grid
        container
        xs={10}
        md={10}
        lg={8}
        xl={4.5}
        sx={{
          ml: { xs: "2em", sm: "8em", md: "10em", lg: "23em", xl: "51em" },
        }}
      >
        {results?.data?.length > 0 &&
          results.data.map((card, i) => (
            <Grid item key={i} xs={10} sm={6} md={4} lg={2.25}>
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
      {!searchState ? (
        <Box />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          mt="2em"
          position="relative"
          right="1em"
        >
          <Button
            disableRipple
            sx={{
              backgroundColor: "none",

              margin: { lg: "0 10em 0 10em" },
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => {
              setCurrentPage((currentPage -= 1));
              submitForm(searchState);
            }}
            disabled={true ? currentPage <= 1 : false}
          >
            {/* <Typography fontSize="20px">Prev</Typography> */}
            <ArrowCircleLeftOutlinedIcon
              sx={{
                fontSize: "80px",
                transition: "all .5s",
                "&:hover": {
                  transform: { md: "scale(1.15)", color: "yellow" },
                },
              }}
            />
          </Button>
          <Typography m="1em" sx={{ fontSize: { xs: "30px", md: "40px" } }}>
            Page {currentPage} of {Math.ceil(data?.totalCount / data?.pageSize)}
          </Typography>
          <Button
            disableRipple
            sx={{
              backgroundColor: "transparent",
              margin: { lg: "0 10em 0 10em" },
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => {
              setCurrentPage((currentPage += 1));
              submitForm(searchState);
            }}
            disabled={
              true
                ? currentPage === Math.ceil(data?.totalCount / data?.pageSize)
                : false
            }
          >
            {/* <Typography fontSize="20px">Next</Typography> */}
            <ArrowCircleRightOutlinedIcon
              sx={{
                fontSize: "80px",
                transition: "all .5s",
                "&:hover": {
                  transform: { md: "scale(1.15)", color: "yellow" },
                },
              }}
            />
          </Button>
        </Box>
      )}
      {modalControl && <PokeModal />}
    </>
  );
}
