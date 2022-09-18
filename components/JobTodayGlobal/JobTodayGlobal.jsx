import React from "react";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AnchorLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function JobTodayGlobal() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Grid container rowSpacing={4} columnSpacing={4}>
            {JobGLobal.map((country, index) => {
              return (
                <Grid key={index} item xs={12} sm={3}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow:
                        "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
                      "&:hover": {
                        boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "180px",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={country.Ico}
                        layout={"fill"}
                        objectfit={"cover"}
                      />
                      <Link href={country.Name}>
                        <AnchorLink
                          sx={{
                            fontSize: "1.6rem",
                            lineHeight: "2rem",
                            fontFamily: "GraphikBold",
                            color: "white",
                            position: "absolute",
                            left: "50%",
                            top: "85%",
                            transform: "translate(-50%,-50%)",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          {country.Name}
                        </AnchorLink>
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        p: 3,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid container spacing={2}>
                        {country.Cities.map((city, index) => {
                          return (
                            <Grid key={index} item xs={6}>
                              <Link href={city}>
                                <AnchorLink
                                  sx={{
                                    fontSize: ".875rem",
                                    lineHeight: "1.25rem",
                                    fontFamily: "GraphikRegular",
                                    color: "rgb(0,0,82)",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                  }}
                                >
                                  {city}
                                </AnchorLink>
                              </Link>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default JobTodayGlobal;

const JobGLobal = [
  {
    Ico: "/pictures/JobGlobal/us.webp",
    Name: "USA",
    Cities: [
      "New York",
      "Miami",
      "Jacksonville",
      "Austin",
      "Atlanta",
      "San Francisco",
      "Houston",
      "Chicago",
      "Los Angeles",
      "Denver",
    ],
  },
  {
    Ico: "/pictures/JobGlobal/us.webp",
    Name: "USA",
    Cities: [
      "New York",
      "Miami",
      "Jacksonville",
      "Austin",
      "Atlanta",
      "San Francisco",
      "Houston",
      "Chicago",
      "Los Angeles",
      "Denver",
    ],
  },
  {
    Ico: "/pictures/JobGlobal/us.webp",
    Name: "USA",
    Cities: [
      "New York",
      "Miami",
      "Jacksonville",
      "Austin",
      "Atlanta",
      "San Francisco",
      "Houston",
      "Chicago",
      "Los Angeles",
      "Denver",
    ],
  },
  {
    Ico: "/pictures/JobGlobal/us.webp",
    Name: "USA",
    Cities: [
      "New York",
      "Miami",
      "Jacksonville",
      "Austin",
      "Atlanta",
      "San Francisco",
      "Houston",
      "Chicago",
      "Los Angeles",
      "Denver",
    ],
  },
  {
    Ico: "/pictures/JobGlobal/us.webp",
    Name: "USA",
    Cities: [
      "New York",
      "Miami",
      "Jacksonville",
      "Austin",
      "Atlanta",
      "San Francisco",
      "Houston",
      "Chicago",
      "Los Angeles",
      "Denver",
    ],
  },
  {
    Ico: "/pictures/JobGlobal/us.webp",
    Name: "USA",
    Cities: [
      "New York",
      "Miami",
      "Jacksonville",
      "Austin",
      "Atlanta",
      "San Francisco",
      "Houston",
      "Chicago",
      "Los Angeles",
      "Denver",
    ],
  },
];
