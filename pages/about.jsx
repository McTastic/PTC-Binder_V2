import { Typography, Grid } from "@mui/material";

export default function About() {
    return (
        <Grid xs={12} md={6} lg={4} 
        sx={{
            ml:{xs:"2em",sm:"15em",md:"20em",lg:"40em"}
        }}
        >
            <Typography variant="h3">
                About page coming soon!
            </Typography>
        </Grid>
    )
  }