import { Typography, Grid, Box, Container } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import MuiNextLink from "@components/MuiNextLink";

export default function About() {
  return (
    <Grid
      item
      container
      xs={10}
      md={6}
      lg={6}
      xl={6}
      align="center"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop:{lg:"3em"},
        ml: { xs: "2em", sm: "15em", md: "20em", lg: "30em" },
      }}
    >
      <Grid 
      item 
      xs={10} 
      md={6} 
      lg={4}
      align="center"
      >
        <Box
        align="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, .25)",
            backdropFilter:"blur(6px)",
            paddingTop:"5em",
            paddingBottom: "3em",
          }}
        >
        <Box
          height={200}
          width={200}
          sx={{
            boxShadow: "10px -5px 4px white, -10px 5px 4px red",
            marginBottom: "2em",
          }}
        >
          <Image
            layout="responsive"
            className="aboutImage"
            height={1}
            width={1}
            src="https://avatars.githubusercontent.com/u/86852570?v=4"
          />
        </Box>
        <Typography
          align="center"
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Sean McCarthy
        </Typography>
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
              marginRight:"2em"
            }}
          >
            <MuiNextLink
              href="https://www.linkedin.com/in/smccarthydev/"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  transform: "scale(1.2)",
                  fontWeight: "bold",
                },
              }}
            >
              Linkedin
            </MuiNextLink>
            <MuiNextLink
              href="https://github.com/McTastic"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  transform: "scale(1.2)",
                  fontWeight: "bold",
                },
              }}
            >
              GitHub
            </MuiNextLink>
            <MuiNextLink
              href="https://mctastic.github.io/PortfolioV2_React/"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  transform: "scale(1.2)",
                  fontWeight: "bold",
                },
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
            <LinkedInIcon />
            <GitHubIcon />
            <LanguageSharpIcon />
          </Box>
        </Box>
        </Box>
      </Grid>
      <Grid 
      item 
      xs={10} 
      md={6} 
      lg={4}
      align="center"
      >
        <Box
          sx={{
            // backgroundColor: "rgb(6,24,54)",
            backgroundColor: "rgba(0, 0, 0, .25)",
            backdropFilter:"blur(6px)",
            paddingTop:"5em",
            paddingBottom: "3em",
          }}
        >
          <Box
            height={200}
            width={200}
            sx={{
              boxShadow: "10px -5px 4px white, -10px 5px 4px red",
              marginBottom: "2em",
            }}
          >
            <Image
              layout="responsive"
              className="aboutImage"
              height={200}
              width={200}
              src="https://avatars.githubusercontent.com/u/83666127?v=4"
            />
          </Box>
          <Typography
            align="center"
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Ryan McCarthy
          </Typography>
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
                marginRight:"2em"
              }}
            >
              <MuiNextLink
                href="https://www.linkedin.com/in/ryan-mccarthy-20950291/"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.2)",
                    fontWeight: "bold",
                  },
                }}
              >
                Linkedin
              </MuiNextLink>
              <MuiNextLink
                href="https://github.com/rmmccar92"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.2)",
                    fontWeight: "bold",
                  },
                }}
              >
                GitHub
              </MuiNextLink>
              <MuiNextLink
                href="https://rmmccar92.github.io/React_Portfolio/"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.2)",
                    fontWeight: "bold",
                  },
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
              <LinkedInIcon />
              <GitHubIcon />
              <LanguageSharpIcon />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
