import React, { useContext, useEffect, useState } from "react";
import { Store } from "/utils/globalStore";
import { Card, Typography, Grid, Avatar } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";

const Profile = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <Grid container display="flex" justifyContent="center">
      <Grid item xs={12} md={8} lg={6} display="flex" justifyContent="center">
        <Card p={12} justifyContent="center" alignItems="flex-start">
          <Avatar sx={{ m: "10em", mt: "1em", width: "5em", height: "5em" }}>
            <Image
              src={userInfo.userImage}
              alt={`${userInfo.firstName}'s profile picture`}
              layout="fill"
            />
          </Avatar>
        </Card>
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
