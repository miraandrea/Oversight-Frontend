import axios from "axios";
import jwtDecode from "jwt-decode";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { Main } from '../../Layout/Main/Main';
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { Header } from '../../Layout/Header/Header';
import CssBaseline from "@mui/material/CssBaseline";
import { BarMenu } from '../../Layout/BarMenu/BarMenu';
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

export const HomeAdmin = () => {

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
            <Header filter={search} setSearch={setSearch} />
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
            <BarMenu />
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
            <section className="mainCard">
              {loading ? (
                <p>Cargando</p>
              ) : character.length > 0 ? (
                character.map((course, index) => (
                  <Main key={index} course={course} />
                ))
              ) : (
                <p>No se encontro el Grupo {' '}<strong>"{search}"</strong>.</p>
              )}
            </section>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}