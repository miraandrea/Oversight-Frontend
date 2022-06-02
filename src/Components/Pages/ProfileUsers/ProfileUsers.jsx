import axios from "axios";
import jwtDecode from "jwt-decode";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Cookies from "universal-cookie";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { IoExitOutline } from "react-icons/io5";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { AvatarProfile } from "../../IU/AvatarProfile/AvatarProfile";
import { ProfileFooter } from "../../Layout/ProfileFooter/ProfileFooter";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

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

export const ProfileUsers = () => {

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const UrlTokenCourse = "http://localhost:4000/v3/courses";

  useEffect(() => {
    const getCourses = () => {
      axios.get(UrlTokenCourse)
        .then((res) => {
          const token = jwtDecode(res.data)
          setloading(false)
          setCourses(token.results[0])
        })
        .catch((error) => console.log(error))

    };
    getCourses();
  }, []);


  const [search, setSearch] = useState("")
  const [loading, setloading] = useState(true)
  const [courses, setCourses] = useState([]);

  const UrlSearchCourse = "http://localhost:4000/v1/courses/0" + search;

  useEffect(() => {
    const getSearch = () => {
      axios.get(UrlSearchCourse)
        .then((res) => user(res.data))
        .catch((error) => console.log(error))

    }
    getSearch();
  }, []);

  const user = (data) => {
    setloading(false)
    setCourses(data.results[0])
  }

  const character = courses.filter((character) =>
    character.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const cookies = new Cookies();
    const idUser = cookies.get("idAdministrador");
    axios
      .get(`http://localhost:4000/v1/administrators/${idUser}`)
      .then((response) => getAllPhotos(response.data))
      .catch((error) => console.log(error));
  });

  const getAllPhotos = (data) => {
    axios
      .get(`http://localhost:4000/v1/decode/${data}`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  };


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} >
          <Toolbar
            sx={{
              pr: "24px",
            }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}>
              <MdMenu />
            </IconButton>
            <Typography
                component="h1"
                variant="h4"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
                fontFamily="pacifico">
                Oversigth
            </Typography>
            <IconButton color="inherit" >
                {photos.length > 0 ? (
                photos.map((photo, index) => {
                    return <AvatarProfile key={index} name={photo.nombre} photo={photo.foto} />;
                })
                ) : (
                <AvatarProfile />
                )}
      </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}>
            <IconButton onClick={toggleDrawer}>
              <MdKeyboardArrowLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
             <div className="menu">
              <ListItemButton >
                <ListItemIcon>
                  <NavLink to="/Administrador">
                    <IoMdHome className="iconmenu" />
                  </NavLink>
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>

              <ListItemButton >
                <ListItemIcon>
                  <IoExitOutline onClick={() => signOff()} className="iconmenu" />
                </ListItemIcon>
                <ListItemText primary="Salir" />
              </ListItemButton>
            </div>
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
          }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <ProfileFooter />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const cookies = new Cookies();

const signOff = () => {
  cookies.remove("idAdministrador", { path: "/" });
  localStorage.clear()
  window.location.href = "/";
};