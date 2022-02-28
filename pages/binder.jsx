import React, { useEffect, useState, useContext } from "react";
import User from "/models/User";
import { Typography, Grid, Button } from "@mui/material";
import { Store } from "/utils/globalStore.js";
import ResultCard from "@components/ResultCard";
import Router from "next/router";
import config from "/config/db";

const BinderPage = (user) => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state || {};
  useEffect(() => {
    if (!userInfo) {
      Router.push("/");
    }
  }, [userInfo]);
  return (
    <Grid container spacing={3} display="flex" justifyContent="center">
      <Typography variant="h4">Binder</Typography>
      {userInfo.cardCollection.map((card, index) => (
        <Grid item xs={12} key={index}>
          <ResultCard
            id={card.id}
            image={card.images.large}
            // type={
            //   card?.types?.length > 0 ? card.types[0].toLowerCase() : "none"
            // }
            // type={card.types[0].toLowerCase()}
            name={card.name}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BinderPage;

export async function getServerSideProps() {
  await config.dbConnect();
  const user = await User.findOne({}).lean();

  return {
    props: {
      user: user.map(config.convertDocToObject()),
    },
  };
}
