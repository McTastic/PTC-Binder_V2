import { Container, Box, Grid } from "@mui/material";
import Image from "next/image";

const NotFound = () => {
  return (
    <Grid container xs={6}>
      <Grid item xs={6}>
        <h3>Draw one, 404 - a wild error appeared!</h3>
      </Grid>
      <Grid item xs={6}>
        <Image
          src={"/images/404-sad-ditto.jpeg"}
          alt="sad Ditto"
          layout="responsive"
          width={300}
          height={300}
          objectFit="contain"
        />
      </Grid>
      {/* <Box sx={{ width: "1em", height: "2em" }}>
        <Image
          src="/images/card-back.png"
          alt="card back"
          layout="fill"
          objectFit="contain"
        />
      </Box> */}
    </Grid>
  );
};
export default NotFound;
