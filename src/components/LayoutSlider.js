import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Slide,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Layout1Default from "../assets/Layout1Default.png";
import Layout2MiniSideBarToggle from "../assets/Layout2MiniSideBarToggle.png";
import Layout3MiniSideBar from "../assets/Layout3MiniSideBar.png";
import Layout4HeaderUser from "../assets/Layout4HeaderUser.png";
import Layout5Standard from "../assets/Layout5Standard.png";
import Layout6HeaderUserMini from "../assets/Layout6HeaderUserMini.png";
import Layout7Drawer from "../assets/Layout7Drawer.png";
import Layout8BitBucket from "../assets/Layout8BitBucket.png";
import Layout9HorizontalDefault from "../assets/Layout9HorizontalDefault.png";
import Layout10HorizontalLight from "../assets/Layout10HorizontalLight.png";
import Layout11HorizontalDark from "../assets/Layout11HorizontalDark.png";

import React, { useRef } from "react";
import { useAnimationOnIntersection } from "./hooks/useAnimationOnIntersection";

const BuyNowButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  color: "white",
  textTransform: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "8px 20px 10px",
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  color: "#1976d2",
  backgroundColor: "white",
  textTransform: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "8px 20px 10px",
  "&:hover": {
    backgroundColor: "primary",
    color: "white",
  },
}));

const LayoutSlider = () => {
  const layoutSliderRef = useRef(null);
  const sliderContainerRightFirstTypo = useRef(null);
  const sliderContainerRightSecondTypo = useRef(null);
  const sliderContainerRightThirdTypo = useRef(null);
  const sliderConatainerRightButton = useRef(null);

  const itemData1Ref = useRef(null);
  const itemData2Ref = useRef(null);
  const itemData3Ref = useRef(null);
  const itemData4Ref = useRef(null);
  const itemData5Ref = useRef(null);
  const itemData6Ref = useRef(null);
  const itemData7Ref = useRef(null);
  const itemData8Ref = useRef(null);
  const itemData9Ref = useRef(null);
  const itemData10Ref = useRef(null);
  const itemData11Ref = useRef(null);

  const shouldAnimate = useAnimationOnIntersection(layoutSliderRef);

  const itemData = [
    {
      img: Layout1Default,
      title: "Layout 1-Default",
      ref: itemData1Ref,
      shouldAnimate: useAnimationOnIntersection(itemData1Ref),
    },
    {
      img: Layout2MiniSideBarToggle,
      title: "Layout 2-Mini SideBar Toggle",
      ref: itemData2Ref,
      shouldAnimate: useAnimationOnIntersection(itemData2Ref),
    },
    {
      img: Layout3MiniSideBar,
      title: "Layout 3-Mini Side Bar",
      ref: itemData3Ref,
      shouldAnimate: useAnimationOnIntersection(itemData3Ref),
    },
    {
      img: Layout4HeaderUser,
      title: "Layout 4-Header User",
      ref: itemData4Ref,
      shouldAnimate: useAnimationOnIntersection(itemData4Ref),
    },
    {
      img: Layout5Standard,
      title: "Layout 5-Standard",
      ref: itemData5Ref,
      shouldAnimate: useAnimationOnIntersection(itemData5Ref),
    },
    {
      img: Layout6HeaderUserMini,
      title: "Layout 6-Header User Mini",
      ref: itemData6Ref,
      shouldAnimate: useAnimationOnIntersection(itemData6Ref),
    },
    {
      img: Layout7Drawer,
      title: "Layout 7-Drawer",
      ref: itemData7Ref,
      shouldAnimate: useAnimationOnIntersection(itemData7Ref),
    },
    {
      img: Layout8BitBucket,
      title: "Layout 8-Bit Bucket",
      ref: itemData8Ref,
      shouldAnimate: useAnimationOnIntersection(itemData8Ref),
    },
    {
      img: Layout9HorizontalDefault,
      title: "Layout 9-Horizontal Default",
      ref: itemData9Ref,
      shouldAnimate: useAnimationOnIntersection(itemData9Ref),
    },
    {
      img: Layout10HorizontalLight,
      title: "Layout 10-Horizontal Light",
      ref: itemData10Ref,
      shouldAnimate: useAnimationOnIntersection(itemData10Ref),
    },
    {
      img: Layout11HorizontalDark,
      title: "Layout 11-Horizontal Dark",
      ref: itemData11Ref,
      shouldAnimate: useAnimationOnIntersection(itemData11Ref),
    },
  ];

  return (
    <Box
      ref={layoutSliderRef}
      sx={{
        margin: "0px auto",
      }}
    >
      <Grid container spacing={6} mt={5}>
        <Grid item xs={12} md={7} order={{ xs: "1", md: "0" }}>
          {itemData.map((item) => {
            return (
              <Box ref={item.ref}>
                <Slide
                  key={item.title}
                  direction="up"
                  in={item.shouldAnimate}
                  container={item.ref.current}
                  {...(item.shouldAnimate ? { timeout: 1000 } : {})}
                >
                  <Card key={item.img}>
                    <Box
                      src={item.img}
                      alt={item.title}
                      component="img"
                      width="100%"
                      loading="lazy"
                    ></Box>

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        fontWeight="bold"
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Box>
            );
          })}
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          position={{ xs: "relative", md: "sticky" }}
          sx={{ alignSelf: "start", top: 0 }}
        >
          <Box ref={sliderContainerRightFirstTypo}>
            <Slide
              direction="down"
              in={shouldAnimate}
              container={sliderContainerRightFirstTypo.current}
              {...(shouldAnimate ? { timeout: 1000 } : {})}
            >
              <Typography
                gutterBottom
                marginBottom="10px"
                variant="subtitle2"
                component="div"
                fontWeight="bold"
                color="primary"
                mt="50px"
              >
                AWARD-WINNING DESIGN COLLECTION
              </Typography>
            </Slide>
          </Box>
          <Box ref={sliderContainerRightSecondTypo}>
            <Slide
              direction="down"
              in={shouldAnimate}
              container={sliderContainerRightSecondTypo.current}
              {...(shouldAnimate ? { timeout: 1500 } : {})}
            >
              <Typography
                gutterBottom
                variant="h4"
                fontWeight="bold"
                color="black"
                marginBottom="10px"
              >
                Best-in-class designs to get you started.
              </Typography>
            </Slide>
          </Box>
          <Box ref={sliderContainerRightThirdTypo}>
            <Slide
              direction="down"
              in={shouldAnimate}
              container={sliderContainerRightThirdTypo.current}
              {...(shouldAnimate ? { timeout: 1500 } : {})}
            >
              <Typography
                gutterBottom
                variant="body2"
                color="black"
                marginBottom="10px"
              >
                Crama has a powerful layout system which allows you to
                configure, customize and also create you own layout.
              </Typography>
            </Slide>
          </Box>
          <Box ref={sliderConatainerRightButton}>
            <Slide
              direction="down"
              in={shouldAnimate}
              container={sliderConatainerRightButton.current}
              {...(shouldAnimate ? { timeout: 1500 } : {})}
            >
              <Stack direction="row" spacing={2} mt={3}>
                <BuyNowButton variant="contained" color="primary">
                  Buy Now
                </BuyNowButton>
                <LearnMoreButton variant="contained">
                  Learn More
                </LearnMoreButton>
              </Stack>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LayoutSlider;
