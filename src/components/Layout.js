import React, { useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Slide,
  styled,
  Typography,
} from "@mui/material";
import documentation from "../assets/documentation.svg";
import cardImagebg from "../assets/cardImagebg.svg";
import gitHub from "../assets/github.svg";
import slack from "../assets/slack.svg";
import LayoutSlider from "./LayoutSlider";
import { useAnimationOnIntersection } from "./hooks/useAnimationOnIntersection";

const CardStyled = styled(Card)(() => ({
  maxWidth: 345,
  boxShadow: "none",
  ":hover": {
    boxShadow: "none",
  },
}));

const BackgroudImageBox = styled(Box)(({ image }) => ({
  background: `center / contain no-repeat url(${image})`,
}));

const FrontImageBox = styled(Box)(({ src, alt }) => ({
  width: "200px",
  height: "200px",
  "&:hover": {
    transform: "skew(-0.04turn, 0.04turn)",
    transition: "all 0.3s ease-in-out 0s",
  },
}));

const ButtonStyled = styled(Button)(() => ({
  textTransform: "none",
  fontWeight: "bold",
  backgroundColor: "#0090F1",
  borderRadius: "8px",
  color: "white",
  paddingLeft: "30px",
  paddingRight: "30px",
  paddingTop: "10px",
  paddingBottom: "10px",
}));

const Layout = ({ layoutRef }) => {
  const textData1 = useRef(null);
  const textData2 = useRef(null);

  const documentationRef = useRef(null);
  const gitHubRef = useRef(null);
  const slackRef = useRef(null);

  const itemsData = [
    {
      src: documentation,
      alt: "Documentation",
      primaryText: "Documentation",
      secondaryText:
        "Available our detailed document and top call support here.",
      buttonText: "Check Document",
      ref: documentationRef,
      shouldAnimate: useAnimationOnIntersection(documentationRef),
    },
    {
      src: gitHub,
      alt: "github",
      primaryText: "GitHub",
      secondaryText: "Get latest feature, make pull request or bug fixes.",
      buttonText: "Join on GitHub",
      ref: gitHubRef,
      shouldAnimate: useAnimationOnIntersection(gitHubRef),
    },
    {
      src: slack,
      alt: "Slack",
      primaryText: "Slack",
      secondaryText:
        "Share your idea and insights, for inspiration collaboration and great result.",
      buttonText: "Join our Community",
      ref: slackRef,
      shouldAnimate: useAnimationOnIntersection(slackRef),
    },
  ];

  const textData = [
    {
      variant: "h6",
      color: "primary",
      text: "Cream MUI",
      fontSizeXS: "14px",
      fontSizeMD: "16px",
      ref: textData1,
      shouldAnimate: useAnimationOnIntersection(textData1),
    },
    {
      variant: "h4",
      color: "black",
      text: "Crema MUI is a great kick-starter",
      fontSizeXS: "22px",
      fontSizeMD: "26px",
      ref: textData2,
      shouldAnimate: useAnimationOnIntersection(textData2),
    },
  ];

  return (
    <Box id="layouts-section" component="section" ref={layoutRef}>
      <Box
        sx={{
          margin: "0px auto",
          maxWidth: "85%",
          paddingTop: "4rem",
        }}
      >
        {textData.map((textItem) => {
          return (
            <Box ref={textItem.ref}>
              <Slide
                direction="down"
                in={textItem.shouldAnimate}
                container={textItem.ref.current}
                {...(textItem.shouldAnimate ? { timeout: 1000 } : {})}
              >
                <Typography
                  variant={textItem.variant}
                  gutterBottom
                  mb="1rem"
                  fontWeight="bold"
                  fontSize={{
                    xs: textItem.fontSizeXS,
                    md: textItem.fontSizeMD,
                  }}
                  color={textItem.color}
                  textAlign="center"
                >
                  {textItem.text}
                </Typography>
              </Slide>
            </Box>
          );
        })}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          marginBottom="40px"
          spacing={2}
        >
          {itemsData.map((itemData) => {
            return (
              <Grid item md={4} sm={5}>
                <Box ref={itemData.ref}>
                  <Slide
                    direction="up"
                    in={itemData.shouldAnimate}
                    container={itemData.ref.current}
                    {...(itemData.shouldAnimate ? { timeout: 1000 } : {})}
                  >
                    <CardStyled>
                      <BackgroudImageBox image={cardImagebg}>
                        <FrontImageBox
                          src={itemData.src}
                          alt={itemData.alt}
                          component="img"
                        ></FrontImageBox>
                      </BackgroudImageBox>

                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          fontWeight="bold"
                        >
                          {itemData.primaryText}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {itemData.secondaryText}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <ButtonStyled
                          variant="contained"
                          color="primary"
                          disableElevation
                          disableRipple
                          disableTouchRipple
                          disableFocusRipple
                        >
                          {itemData.buttonText}
                        </ButtonStyled>
                      </CardActions>
                    </CardStyled>
                  </Slide>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box>
          <LayoutSlider />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
