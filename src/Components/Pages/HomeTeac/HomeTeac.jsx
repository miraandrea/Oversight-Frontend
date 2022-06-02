import axios from "axios";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Cookies from "universal-cookie/es6";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { NavBar } from "../../Layout/NavBar/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import { MainTeacher } from "../../Layout/MainTeacher/MainTeacher";
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

export const HomeTeac = () => {

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [courses, setCourses] = useState([]);
  const cookies = new Cookies()
  const idUser = cookies.get("idDocente")

  const UrlTokenCourse = `http://localhost:4000/v1/teachers/${idUser}/courses`;
  
  useEffect(() => {
    const getCourses = () => {
      axios.get(UrlTokenCourse)
        .then((res) => {
          getToken(res.data)
        })
        .catch((error) => console.log(error))

    };
    getCourses();
  }, []);

  const getToken = (data) => {
    axios.get(`http://localhost:4000/v1/decode/${data}`)
        .then((res) => setCourses(res.data))
        .catch((error) => console.log(error))
  }

  // const [search, setSearch] = useState("")
  // const [loading, setloading] = useState(true)

  console.log(courses);
  // const UrlSearchCourse = "http://localhost:4000/v1/courses/0" + search;

  // useEffect(() => {
  //   const getSearch = () => {
  //     axios.get(UrlSearchCourse)
  //       .then((res) => user(res.data))
  //       .catch((error) => console.log(error))

  //   }
  //   getSearch();
  // }, []);

  // const user = (data) => {
  //   setloading(false)
  //   setCourses(data.results[0])
  // }

  // const character = courses.filter((character) =>
  //   character.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  // )

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
            {/* <Header filter={search} setSearch={setSearch} /> */}
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
          }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* <section className="mainCard">
              {loading ? (
                <p>Cargando</p>
              ) : character.length > 0 ? (
                character.map((course, index) => (
                  <MainTeacher key={index} course={course} />
                  ))
              ) : (
                <p>No se encontro el Grupo {' '}<strong>"{search}"</strong>.</p>
              )}
            </section> */}
            <section className="mainCard">
            {courses.map((course1, index) => (
                  <MainTeacher key={index} course1={course1} />
                  ))}
              </section>
              {/* <MainTeacher key={courses.idcurso} courses={courses} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}