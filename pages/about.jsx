import { Typography, Grid, Box, Container } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import MuiNextLink from "@components/MuiNextLink";
import Carousel from "@components/carousel"

export default function About() {
  return (
    <Grid
      item
      container
      xs={10}
      md={6}
      lg={6}
      xl={8}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop:{lg:"3em"},
        ml: { xs: "2em", sm: "15em", md: "20em", lg: "30em",xl:"25em" },
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
            boxShadow: "6px -6px 15px black, -6px 6px 15px black, 20px -15px 4px white, -20px 15px 4px red",
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
            fontSize: {xs:"40px",lg:"22px"},
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
              marginRight:"2em",
              fontSize: {xs:"30px",lg:"20px"}
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
              marginTop:{xs:".25em",lg:"0"}
            }}
          >
            <LinkedInIcon sx={{
              fontSize:{xs:"40px",lg:"30px"},
              marginBottom:{xs:".1em",lg:"0"}    
              }} 
              />
            <GitHubIcon sx={{fontSize:{xs:"40px",lg:"30px"},}}/>
            <LanguageSharpIcon sx={{
              fontSize:{xs:"40px",lg:"30px"},
              marginTop:{xs:".1em",lg:"0"}    
              }}
              />
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
              fontSize: {xs:"40px",lg:"22px"},
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
                marginRight:"2em",
                fontSize: {xs:"30px",lg:"20px"}
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
                marginTop:{xs:".25em",lg:"0"}
              }}
            >
              <LinkedInIcon sx={{
                fontSize:{xs:"40px",lg:"30px"},
                marginBottom:{xs:".1em",lg:"0"}    
                }} 
                />
              <GitHubIcon sx={{fontSize:{xs:"40px",lg:"30px"}}} />
              <LanguageSharpIcon sx={{
                fontSize:{xs:"40px",lg:"30px"},
                marginTop:{xs:".1em",lg:"0"}     
            }} />
            </Box>
          </Box>
        </Box>
      </Grid>
      {/* <Box
          sx={{
            backgroundColor: "rgb(6,24,54)",
            position: "relative",
            zIndex:"999",
            marginTop:"3em",
            marginBottom:"5em",
            boxShadow: "10px -5px 4px white, -10px 5px 4px red, 0 0 200px rgba(0,0,0,0.9) inset",
            height: {xs:"75vh",md:"55vh"},
            width: {xs:"90vw",xl:"35vw"},
          }}
        >
          <Carousel />
        </Box> */}
    </Grid>
  );
}
