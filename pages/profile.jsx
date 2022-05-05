import React, { useContext, useEffect } from "react";
import { Store } from "/utils/globalStore";
import { Card, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import Router from "next/router";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state || {};
  useEffect(() => {
    if (!userInfo) {
      Router.push("/");
    }
  }, [userInfo]);

  const updateHandler = () => {
    console.log("update");
  };
  return (
    <Grid container display="flex" justifyContent="center">
      <Grid
        item
        xs={12}
        md={8}
        lg={6}
        display="flex"
        justifyContent="center"
        marginTop="3em"
        height="28em"
      >
        {userInfo && (
          <>
            <Card
              sx={{
                boxShadow: "5px 5px 15px black",
                border: "10px solid #D7BB03",
                height: "auto",
                width: "25em",
                padding: ".5em",
                background: `url("/images/profileBackground.png")`,
              }}
            >
              <Box
                sx={{
                  border: "8px solid",
                  borderImage:
                    "linear-gradient(45deg, #e0c653, #FDE08D, #dfc428) 1",
                  boxShadow: "3px 3px 5px  black",
                }}
              >
                <Image
                  src={userInfo.userImage}
                  alt={`${userInfo.firstName}'s profile picture`}
                  layout="responsive"
                  height="1"
                  width="2"
                  className="profileImg"
                />
                <Box position="absolute" top={325} right={685}>
                  <SettingsIcon
                    fontSize="large"
                    onClick={updateHandler}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
              <Typography
                color="black"
                sx={{
                  marginTop: ".5em",
                  paddingTop: "0",
                  fontSize: "2em",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "rgba(0,0,0,.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {userInfo.firstName} {userInfo.lastName}
              </Typography>
              <Typography
                color="black"
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "rgba(0,0,0,.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {userInfo.email}
              </Typography>
              <Typography
                color="black"
                fontSize="20px"
                align="center"
                padding="1em 0 2em 0"
                sx={{
                  backgroundColor: "rgba(0,0,0,.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {userInfo.firstName} has been a valued member of our site
                since...
              </Typography>
            </Card>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
