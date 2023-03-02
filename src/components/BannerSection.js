import {
  Avatar,
  Box,
  Button,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import bannerbg from "../assets/bannerbg.png";
import Banner from "../assets/Banner.png";
import FigmaSVG from "../assets/figma.svg";
import MuiSVG from "../assets/mui.svg";
import NextSVG from "../assets/nextjs.svg";
import JsSVG from "../assets/js.svg";
import TsSVG from "../assets/ts.svg";
import BoltIcon from "@mui/icons-material/Bolt";
import { useAnimationOnIntersection } from "./hooks/useAnimationOnIntersection";

const BoltButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#F04F47",
  fontWeight: "600",
  borderRadius: "8px",
  padding: "8px 20px 10px",
  fontSize: "14px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.error.dark,
  },
}));

const DocsButton = styled(Button)(() => ({
  color: "white",
  fontWeight: "600",
  borderRadius: "8px",
  padding: "8px 20px 10px",
  fontSize: "14px",
  border: "1px solid white",
  textTransform: "none",
  "&:hover": {
    border: "1px solid white",
  },
}));

const Avatars = [
  {
    src: FigmaSVG,
    alt: "Figma",
  },
  {
    src: MuiSVG,
    alt: "MUI",
  },
  {
    src: NextSVG,
    alt: "Next",
  },
  {
    src: JsSVG,
    alt: "JS",
  },
  {
    src: TsSVG,
    alt: "TS",
  },
];

const BannerStyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    paddingTop: "8rem ",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "12rem ",
  },
  margin: "0px auto",
  paddingBottom: "5rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  maxWidth: "85%",
}));

const BannerSection = ({ bannerRef }) => {
  //for sliding
  const firstcontainerRef = useRef(null);
  const secondcontainerRef = useRef(null);

  const shouldAnimate = useAnimationOnIntersection(bannerRef, {
    threshold: 0.5,
  });

  return (
    <Box
      id="banner-section"
      ref={bannerRef}
      component="section"
      sx={{ backgroundImage: `url(${bannerbg})` }}
    >
      <BannerStyledBox>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4} ref={firstcontainerRef}>
            <Slide
              direction="right"
              in={shouldAnimate}
              container={firstcontainerRef.current}
              {...(shouldAnimate ? { timeout: 1000 } : {})}
            >
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  component="h1"
                  fontWeight="bold"
                  color="white"
                  mb="30px"
                >
                  Start a new project with Crema MUI
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  fontWeight="bold"
                  color="white"
                  mb="1rem"
                >
                  Our creatively crafted products keep you moving faster in this
                  digital space.
                </Typography>
                <Stack direction="row" spacing={{ xs: 1, sm: 2 }} marginTop={2}>
                  {Avatars.map((avatar) => {
                    return (
                      <Avatar
                        key={avatar.src}
                        sx={{ width: 50, height: 50 }}
                        alt={avatar.alt}
                        src={avatar.src}
                      />
                    );
                  })}
                </Stack>
                <Stack direction="row" spacing={2} sx={{ marginTop: "1.8rem" }}>
                  <BoltButton startIcon={<BoltIcon />} variant="contained">
                    Live Preview
                  </BoltButton>
                  <DocsButton variant="outlined" disableElevation>
                    Docs
                  </DocsButton>
                </Stack>
              </Box>
            </Slide>
          </Grid>

          <Grid
            item
            ref={secondcontainerRef}
            xs={12}
            md={8}
            sx={{
              alignSelf: "center",
              textAlign: "center",
              paddding: "0px",
            }}
          >
            <Slide
              direction="up"
              in={shouldAnimate}
              container={secondcontainerRef.current}
              {...(shouldAnimate ? { timeout: 1000 } : {})}
            >
              <Box
                component="img"
                src={Banner}
                alt="banner"
                width={"100%"}
              ></Box>
            </Slide>
          </Grid>
        </Grid>
      </BannerStyledBox>
    </Box>
  );
};

export default BannerSection;
