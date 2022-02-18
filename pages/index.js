import Head from "next/head";
import Image from "next/image";
import { Typography } from "@mui/material";
import Layout from "/components/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="center-on-page">
        <div className="pokeball">
          <div className="pokeball__button"></div>
        </div>
      </div>
    </Layout>
  );
}
