import React, { useContext, useEffect, useState } from "react";
import { Store } from "/utils/globalStore";
import { Card, Typography, Grid, Avatar } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box } from "@mui/system";
import Router from "next/router";

const Profile = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state || {};
  useEffect(() => {
    if (!userInfo) {
      Router.push("/");
    }
  }, [userInfo]);
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
            {/* <Avatar sx={{ m: "0 auto 1em auto", width: "5em", height: "5em" }}> */}
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
            </Box>
            {/* </Avatar> */}
            <Typography
              color="text.secondary"
              sx={{
                fontSize: "2em",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {userInfo.firstName} {userInfo.lastName}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: "1em",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {userInfo.email}
            </Typography>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
