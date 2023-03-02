import React, { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logoWhite from "../assets/logoWhite.png";
import logoColor from "../assets/logoColor.png";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import { styled } from "@mui/material/styles";
import { useAnimationOnIntersection } from "./hooks/useAnimationOnIntersection";

const pages = [
  { name: "Home", href: "#banner-section" },
  { name: "Layouts", href: "#layouts-section" },
  { name: "Apps", href: "#apps-section" },
  { name: "Customization", href: "#customization-section" },
  { name: "Features", href: "#features-section" },
  { name: "Document", href: "#document-section" },
];

const LinkStyled = styled(Link)(({ scrolled, activelink, href }) => ({
  color:
    scrolled && activelink === href
      ? "#EE2D36"
      : activelink === href
      ? "#EDCD37"
      : scrolled
      ? "black"
      : "white",
  padding: "0px 14px ",
  "&:hover": {
    color: "yellow",
  },
  "&:active": {
    color: "yellow",
  },
}));

const AppBarStyled = styled(AppBar)(({ scrolled }) => ({
  backgroundColor: scrolled ? "white" : "transparent",
  boxShadow: !scrolled && "none",
  transform: !scrolled && "translate3d(0px, 0px, 0px)",
  transition: !scrolled && "all 0.5s ease-in-out ",
}));

const ToolBarStyled = styled(Toolbar)(({ scrolled }) => ({
  padding: scrolled ? "0px" : "15px 0",
  margin: "0px auto",
  width: "85%",
}));

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "flex-end",
}));

const Navbar = ({ scrolled, scrollToSection, activelink }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const containerRef = useRef(null);

  const shouldAnimate = useAnimationOnIntersection(containerRef);

  return (
    <AppBarStyled scrolled={scrolled} ref={containerRef} position="fixed">
      <Slide
        direction="down"
        in={shouldAnimate}
        container={containerRef.current}
        {...(shouldAnimate ? { timeout: 1000 } : {})}
      >
        <ToolBarStyled scrolled={scrolled}>
          <Box
            sx={{
              maxWidth: 130,
              display: { xs: "none", md: "flex" },
              mr: 1,
              flexGrow: 1,
            }}
            component="img"
            alt="logo"
            src={scrolled ? logoColor : logoWhite}
          ></Box>

          <Box
            sx={{
              maxWidth: 130,
              display: { xs: "flex", md: "none" },
              mr: 1,
              flexGrow: 1,
            }}
            component="img"
            alt="logo"
            src={scrolled ? logoColor : logoWhite}
          ></Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon sx={{ color: scrolled ? "#0090F1" : "black" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              flexGrow: 1,
              margin: 0,
              padding: 0,
              marginRight: "25px",
            }}
          >
            {pages.map((page) => (
              <LinkStyled
                scrolled={scrolled}
                activelink={activelink}
                key={page.name}
                href={page.href}
                underline="none"
                onClick={() => {
                  scrollToSection(page.href);
                }}
              >
                {page.name}
              </LinkStyled>
            ))}
          </Box>
        </ToolBarStyled>
      </Slide>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100vh",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon fontSize="large" color="primary" />
          </IconButton>
        </DrawerHeader>

        <List>
          {pages.map((page) => {
            return (
              <>
                <ListItem key={page.name} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      scrollToSection(page.href);
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "30px !important" }}>
                      {activelink === page.href ? (
                        <CircleIcon
                          sx={{
                            width: "10px",
                            height: "10px",
                            color: "#0090F1",
                          }}
                        />
                      ) : null}
                    </ListItemIcon>

                    <ListItemText
                      alignSelf="start"
                      sx={{
                        color: activelink === page.href ? "#0090F1" : "343D48",
                      }}
                    >
                      {page.name}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}
        </List>
      </Drawer>
    </AppBarStyled>
  );
};

export default Navbar;
