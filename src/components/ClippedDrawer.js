import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import { Slide } from "@mui/material";
import { styled } from "@mui/material/styles";
import logoWhite from "../assets/logoWhite.png";
import logoColor from "../assets/logoColor.png";
import { useAnimationOnIntersection } from "./hooks/useAnimationOnIntersection";

const drawerWidth = 240;

const pages = [
  { name: "Home", href: "#banner-section" },
  { name: "Layouts", href: "#layouts-section" },
  { name: "Apps", href: "#apps-section" },
  { name: "Customization", href: "#customization-section" },
  { name: "Features", href: "#features-section" },
  { name: "Document", href: "#document-section" },
];

const AppBarStyled = styled(AppBar)(({ scrolled }) => ({
  backgroundColor: scrolled ? "white" : "transparent",
  boxShadow: !scrolled && "none",
  transform: !scrolled && "translate3d(0px, 0px, 0px)",
  transition: !scrolled && "all 0.5s ease-in-out ",
  zIndex: (theme) => theme.zIndex.drawer + 1,
}));

const ToolBarStyled = styled(Toolbar)(({ scrolled }) => ({
  padding: scrolled ? "0px" : "15px 0",
  margin: "0px auto",
  width: "85%",
}));

export default function ClippedDrawer({
  scrolled,
  scrollToSection,
  activelink,
  children,
}) {
  const containerRef = React.useRef(null);

  const shouldAnimate = useAnimationOnIntersection(containerRef);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        ref={containerRef}
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: scrolled ? "white" : "#1976D2",
          boxShadow: !scrolled && "none",
        }}
      >
        <Slide
          direction="down"
          in={shouldAnimate}
          container={containerRef.current}
          {...(shouldAnimate ? { timeout: 1000 } : {})}
        >
          <Toolbar>
            <Box
              sx={{
                maxWidth: 130,
              }}
              component="img"
              alt="logo"
              src={scrolled ? logoColor : logoWhite}
            ></Box>
          </Toolbar>
        </Slide>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
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
                          color:
                            activelink === page.href ? "#0090F1" : "#343D48",
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
        </Box>
      </Drawer>
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
