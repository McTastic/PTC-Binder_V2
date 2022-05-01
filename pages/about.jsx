import { Typography, Grid, Box, Container } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import MuiNextLink from "@components/MuiNextLink";
import { fontSize, fontWeight } from "@mui/system";

export default function About() {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        ml: { xs: "2em", sm: "15em", md: "20em", lg: "40em" },
      }}
    >
      <Grid>
        <Image
          height={200}
          width={200}
          src="https://avatars.githubusercontent.com/u/86852570?v=4"
        />
        <Typography 
        align="center"
        sx={{
            fontSize:"22px",
            fontWeight:"bold",
        }}
        >Sean McCarthy</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MuiNextLink
              href="https://www.linkedin.com/in/smccarthydev/"
              sx={{
                textDecoration: "none",
                "&:hover":{
                    transform: "scale(1.2)",
                    fontWeight: "bold"
                }
              }}
            >
              Linkedin
            </MuiNextLink>
            <MuiNextLink
              href="https://github.com/McTastic"
              sx={{
                textDecoration: "none",
                "&:hover":{
                    transform: "scale(1.2)",
                    fontWeight: "bold"
                }
              }}
            >
              GitHub
            </MuiNextLink>
            <MuiNextLink
              href="https://mctastic.github.io/PortfolioV2_React/"
              sx={{
                textDecoration: "none",
                marginRight:"1em",
                "&:hover":{
                    transform: "scale(1.2)",
                    fontWeight: "bold"
                }
              }}
            >
              Portfolio
            </MuiNextLink>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GitHubIcon />
            <LinkedInIcon />
            <LanguageSharpIcon />
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Image
          height={200}
          width={200}
          src="https://avatars.githubusercontent.com/u/83666127?v=4"
        />
        <Typography 
        align="center"
        sx={{
            fontSize:"22px",
            fontWeight:"bold",
        }}
        >Ryan McCarthy</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
          sx={{
              display:"flex",
              flexDirection:"column",
          }}
          >
            <MuiNextLink 
            href="https://www.linkedin.com/in/ryan-mccarthy-20950291/"
            sx={{
                textDecoration:"none",
                "&:hover":{
                    transform: "scale(1.2)",
                    fontWeight: "bold"
                }
            }}
            >
              Linkedin
            </MuiNextLink>
            <MuiNextLink 
            href="https://github.com/rmmccar92"
            sx={{
                textDecoration:"none",
                "&:hover":{
                    transform: "scale(1.2)",
                    fontWeight: "bold"
                }
            }}
            >
              GitHub
            </MuiNextLink>
            <MuiNextLink 
            href="https://rmmccar92.github.io/React_Portfolio/"
            sx={{
                textDecoration:"none",
                marginRight:"1em",
                "&:hover":{
                    transform: "scale(1.2)",
                    fontWeight: "bold"
                }
            }}
            >
              Portfolio
            </MuiNextLink>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GitHubIcon />
            <LinkedInIcon />
            <LanguageSharpIcon />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
