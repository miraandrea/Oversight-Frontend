import axios from "axios";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Cookies from "universal-cookie";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { React, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { NavBar } from "../../Layout/NavBar/NavBar";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { MainTeacherUser } from "../../Layout/MainTeacherUser/MainTeacherUser";
import {
  MdMenu,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

export const ViewUsersDocente = () => {
  
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   const cookies = new Cookies();
  //   const idUser = cookies.get("idAdministrador");
  //   axios
  //     .get(`http://localhost:4000/v1/administrators/${idUser}`)
  //     .then((response) => getAllPhotos(response.data))
  //     .catch((error) => console.log(error));
  // });

  // const getAllPhotos = (data) => {
  //   axios
  //     .get(`http://localhost:4000/v1/decode/${data}`)
  //     .then((response) => setPhotos(response.data[0].foto))
  //     .catch((error) => console.log(error));
  // };

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const logOut = () => {
    return (window.location = "/");
  };
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} >
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MdMenu />
            </IconButton>
            {/* <Header /> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MdKeyboardArrowLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
              <NavBar />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <MainTeacherUser />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
