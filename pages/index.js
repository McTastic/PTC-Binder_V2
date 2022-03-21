import { Typography, Grid } from "@mui/material";
import Carousel from "@components/carousel";

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        sx={{
          ml: { xs: "2em", sm: "15em", md: "20em", lg: "40em" },
        }}
      >
        <Typography variant="h3">Home page coming soon!</Typography>
        <Carousel/>
      </Grid>
    </Grid>
  );
}
