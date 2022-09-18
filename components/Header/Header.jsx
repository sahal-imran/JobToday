import React, { useEffect } from "react";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import AnchorLink from "@mui/material/Link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Hamburger from "hamburger-react";

function Header() {
  const router = useRouter();
  const JobTitle = router.query.jobTitle;
  const [Show_SearchBox_For_Mobile_View, Set_Show_SearchBox_For_Mobile_View] =
    useState(false);

  const ButtonsUI = () => {
    if (router.pathname === `/country/locations`) {
      return (
        <Box
          sx={{
            width: {
              md: "30%",
            },
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            mr: {
              lg: 6,
            },
          }}
        >
          <AnchorLink
            href=""
            sx={{
              px: 2,
              py: 1,
              borderRadius: "8px",
              color: "white",
              fontSize: "18px",
              lineHeight: "24px",
              fontFamily: "GraphikMedium",
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,.2)",
              },
            }}
          >
            Start hiring
          </AnchorLink>
          <AnchorLink
            href=""
            sx={{
              px: 2,
              py: 1,
              borderRadius: "8px",
              color: "white",
              fontSize: "18px",
              lineHeight: "24px",
              fontFamily: "GraphikMedium",
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,.2)",
              },
              ml: 2,
            }}
          >
            Log In
          </AnchorLink>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            width: {
              md: "30%",
            },
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            mr: {
              lg: 6,
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              px: 2,
              py: 1,
              borderRadius: "8px",
              color: "white",
              fontSize: "18px",
              lineHeight: "24px",
              fontFamily: "GraphikMedium",
              textDecoration: "none",
              fontWeight: 500,
              backgroundColor: "transparent",
              boxShadow: "unset",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,.2)",
                boxShadow: "unset",
              },
              textTransform: "capitalize",
            }}
          >
            Chats
          </Button>
          <Button
            variant="contained"
            sx={{
              px: 2,
              py: 1,
              borderRadius: "8px",
              color: "white",
              fontSize: "18px",
              lineHeight: "24px",
              fontFamily: "GraphikMedium",
              textDecoration: "none",
              fontWeight: 500,
              backgroundColor: "transparent",
              boxShadow: "unset",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,.2)",
                boxShadow: "unset",
              },
              textTransform: "capitalize",
              ml: 2,
            }}
          >
            Profile
          </Button>
        </Box>
      );
    }
  };

  const BlogPageNav = () => {
    if (
      router.pathname === "/blog" ||
      router.pathname === "/blog/CareerAdvice" ||
      router.pathname === "/blog/EmployerAdvice" ||
      router.pathname === "/blog/InsideJobToday"
    )
      return true;
    else return false;
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const LoinPOP = Boolean(anchorEl);
  const handleLoinPOPClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLoinPOPClose = () => {
    setAnchorEl(null);
  };

  // hamBugar
  const [HamBurgar, setHamBurgar] = useState(false);

  return (
    <>
      {!BlogPageNav() && (
        <Box
          sx={
            router.pathname === "/country" ||
            router.pathname === "/" ||
            router.pathname === "/auth" ||
            router.pathname === "/jobtodayglobal"
              ? { display: "none" }
              : {
                  width: "100%",
                  minHeight: "80px",
                  py: {
                    md: "unset",
                    xs: 2,
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  background: "#2252c7",
                }
          }
        >
          <Container
            maxWidth="lgBig"
            sx={
              Show_SearchBox_For_Mobile_View
                ? { display: "none" }
                : {
                    height: "100%",
                    display: "flex",
                    justifyContent: {
                      md: "center",
                      xs: "space-between",
                    },
                    alignItems: "center",
                  }
            }
          >
            <Box
              sx={{
                width: {
                  md: "70%",
                },
                height: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <AnchorLink
                href=""
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/pictures/home/logo.svg"}
                  width={50}
                  height={50}
                  objectFit={"cover"}
                  alt={"logo"}
                />
              </AnchorLink>
              <Box
                sx={{
                  width: "85%",
                  height: "50px",
                  display: {
                    md: "flex",
                    xs: "none",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  ml: 4,
                  background: "white",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "44%",
                    height: "100%",
                    borderRight: "1px solid #eaeaea",
                  }}
                >
                  {/* Input */}
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <input
                      className="NavFormInputs"
                      autoComplete="off"
                      type="text"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "none",
                        padding: "0px 20px",
                        fontFamily: "GraphikRegular",
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#2252c7",
                      }}
                      placeholder="Search jobs"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "4%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontFamily: "GraphikRegular",
                      color: "#2252c7",
                    }}
                  >
                    in
                  </Typography>
                </Box>
                <Box sx={{ width: "44%", height: "100%" }}>
                  {/* Input */}
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <input
                      className="NavFormInputs"
                      autoComplete="off"
                      type="text"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "none",
                        fontFamily: "GraphikRegular",
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#2252c7",
                      }}
                      placeholder="Which city?"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "8%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contain"
                    sx={{
                      backgroundColor: "#eaeaea",
                      border: "none",
                      boxShadow: "none",
                      textTransform: "capitalize",
                      width: "100%",
                      height: "100%",
                      "&:hover": {
                        backgroundColor: "#eaeaea",
                        border: "none",
                        boxShadow: "none",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "40px",
                      p: 0,
                    }}
                  >
                    <Image
                      src={"/pictures/Morecities/search-blue.svg"}
                      width={30}
                      height={30}
                      objectFit="contain"
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
            {ButtonsUI()}
          </Container>

          {/* Button Box for show the search bar box in mobile view */}
          <Container
            maxWidth="lgBig"
            sx={
              Show_SearchBox_For_Mobile_View
                ? { display: "none" }
                : {
                    display: {
                      md: "none",
                      xs: "flex",
                    },
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }
            }
          >
            <Box
              onClick={() =>
                Set_Show_SearchBox_For_Mobile_View(
                  !Show_SearchBox_For_Mobile_View
                )
              }
              sx={{
                overflow: "hidden",
                borderRadius: "8px",
                width: "100%",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contain"
                  sx={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "unset",
                    boxShadow: "none",
                    textTransform: "capitalize",
                    width: "100%",
                    height: "100%",
                    "&:hover": {
                      backgroundColor: "white",
                      border: "none",
                      boxShadow: "none",
                      borderRadius: "unset",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 0,
                    minWidth: "30px",
                  }}
                >
                  <Image
                    src={"/pictures/Morecities/search-black.svg"}
                    width={30}
                    height={30}
                    objectFit="contain"
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  width: "calc(100% - 50px)",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  autoComplete="off"
                  type="text"
                  style={{
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    border: "none",
                    fontFamily: "GraphikRegular",
                    fontSize: "16px",
                    color: "#2252c7",
                    pointerEvents: "none",
                  }}
                  placeholder="All jobs in"
                />
              </Box>
            </Box>
          </Container>

          {/* Toggle search bar box for mobile view */}
          <Container
            maxWidth="lgBig"
            sx={
              Show_SearchBox_For_Mobile_View
                ? {
                    display: {
                      md: "none",
                      xs: "flex",
                    },
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : { display: "none" }
            }
          >
            <Box sx={{ flexGrow: 1, width: "100%" }}>
              <Grid container spacing={0}>
                <Grid item xs={1}>
                  <Box
                    onClick={() =>
                      Set_Show_SearchBox_For_Mobile_View(
                        !Show_SearchBox_For_Mobile_View
                      )
                    }
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      mt: 1,
                    }}
                  >
                    <Image
                      src={"/pictures/Morecities/cross-white.svg"}
                      width={24}
                      height={24}
                      objectFit={"contain"}
                    />
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "42px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <input
                        autoComplete="off"
                        type="text"
                        style={{
                          width: "100%",
                          height: "100%",
                          outline: "none",
                          border: "none",
                          fontFamily: "GraphikRegular",
                          fontSize: "16px",
                          color: "#2252c7",
                          padding: "0px 16px",
                        }}
                        placeholder="Search jobs"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "42px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        overflow: "hidden",
                        mt: 1,
                      }}
                    >
                      <input
                        autoComplete="off"
                        type="text"
                        style={{
                          width: "100%",
                          height: "100%",
                          outline: "none",
                          border: "none",
                          fontFamily: "GraphikRegular",
                          fontSize: "16px",
                          color: "#2252c7",
                          padding: "0px 16px",
                        }}
                        placeholder="Which city?"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "start",
                      mt: 1,
                    }}
                  >
                    <Image
                      src={"/pictures/Morecities/search-white.svg"}
                      width={28}
                      height={28}
                      objectFit={"contain"}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      )}
      {BlogPageNav() && (
        <Box
          sx={{
            width: "100%",
            minHeight: { md: "80px", xs: "70px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#2252c7",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href={"/country"}>
              <AnchorLink
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/pictures/home/logo.svg"}
                  width={50}
                  height={50}
                  objectFit={"cover"}
                  alt={"logo"}
                />
              </AnchorLink>
            </Link>
            {/* Nav items for pc */}
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href={""}>
                <AnchorLink
                  sx={{
                    fontSize: "18px",
                    lineHeight: "74px",
                    height: "74px",
                    fontFamily: "GraphikRegular",
                    color: "white",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    cursor: "pointer",
                    borderBottom: "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": { borderBottom: "2px solid white" },
                    mr: 4,
                  }}
                >
                  Explore jobs
                </AnchorLink>
              </Link>
              <Link href={""}>
                <AnchorLink
                  sx={{
                    fontSize: "18px",
                    lineHeight: "74px",
                    height: "74px",
                    fontFamily: "GraphikRegular",
                    color: "white",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    cursor: "pointer",
                    borderBottom: "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": { borderBottom: "2px solid white" },
                    mr: 4,
                  }}
                >
                  Hire staff
                </AnchorLink>
              </Link>
              <Link href={""}>
                <AnchorLink
                  sx={{
                    fontSize: "18px",
                    lineHeight: "74px",
                    height: "74px",
                    fontFamily: "GraphikRegular",
                    color: "white",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    cursor: "pointer",
                    borderBottom: "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": { borderBottom: "2px solid white" },
                    mr: 4,
                  }}
                >
                  Explore jobs
                </AnchorLink>
              </Link>
              <div>
                <Button
                  id="basic-button"
                  aria-controls={LoinPOP ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={LoinPOP ? "true" : undefined}
                  onClick={handleLoinPOPClick}
                  sx={{
                    fontSize: "18px",
                    lineHeight: "74px",
                    height: "74px",
                    fontFamily: "GraphikRegular",
                    color: "white",
                    textTransform: "unset",
                    "&:hover": { background: "rgba(0,0,0,.15)" },
                  }}
                >
                  Log in
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={LoinPOP}
                  onClose={handleLoinPOPClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleLoinPOPClose}>
                    <Link
                      href={{
                        pathname: "/auth",
                        query: {
                          Type: "Hiring",
                        },
                      }}
                    >
                      <AnchorLink
                        sx={{
                          fontSize: "18px",
                          fontFamily: "GraphikRegular",
                          color: "#252525",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        I'm a Jobseeker
                      </AnchorLink>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleLoinPOPClose}>
                    <Link
                      href={{
                        pathname: "/auth",
                        query: {
                          Type: "JOB_Search",
                        },
                      }}
                    >
                      <AnchorLink
                        sx={{
                          fontSize: "18px",
                          fontFamily: "GraphikRegular",
                          color: "#252525",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        I'm a Employer
                      </AnchorLink>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </Box>

            {/* Hamburgar */}
            <Box sx={{ display: { md: "none", xs: "block" } }}>
              <Hamburger
                toggled={HamBurgar}
                toggle={setHamBurgar}
                rounded
                color="white"
                size={28}
              />
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}

export default Header;
