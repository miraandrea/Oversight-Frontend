import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdGroupAdd } from "react-icons/md";
import { IoMdHome, IoMdPersonAdd } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { MdMenu, MdKeyboardArrowLeft } from "react-icons/md";

//components
import foto from "../../IU/ImgProfile/student.jpg";
import { Header } from "../../Layout/Header/Header";
import { Register } from "../../IU/Register/Register";
import { GroupAdd } from "../../IU/GroupAdd/GroupAdd";
import { BarMenu } from "../../Layout/BarMenu/BarMenu";
import { MainAdmi } from "../../Layout/MainAdmi/MainAdmi";
import { ViewProfileAdmiTeacher } from "../../IU/ViewProfileAdmi/ViewProfileAdmiTeacher";

//material ui
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Modal from "@material-ui/core/Modal";
import Card1 from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

export const ViewUsersAdmin = () => {
  
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const logOut = () => {
    return (window.location = "/");
  };

  //view students in a course
  const { name } = useParams();

  const UrlTokenStudent = "http://localhost:4000/v1/courses/" + name;

  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getStudent = () => {
      axios.get(UrlTokenStudent).then((response) => {
        setCourses(response.data);
        setTeacher(response.data[0]);
        setloading(false);
      });
    };
    getStudent();
  }, []);

  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(true);
  const [courses, setCourses] = useState([]);
  
  //seeker
  const UrlSearchCourse = "http://localhost:4000/v1/students/0" + search;

  useEffect(() => {
    const getSearch = () => {
      axios
        .get(UrlSearchCourse)
        .then((res) => user(res.data))
        .catch((error) => console.log(error));
    };
    getSearch();
  }, []);

  const user = (data) => {
    console.log(data);
    setloading(false);
    setCourses(data.results[0]);
  };

  const character = courses.filter((character) =>
    character.estudianteNombre
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())
  );

  //modal

  const [modalRegisterUsers, setModalRegisterUsers] = useState(false);
  const [value, setValue] = useState(0);
  const handleOpen = () => {
    setModalRegisterUsers(true);
  };
  const handleClose = () => {
    setModalRegisterUsers(false);
  };
  const bodyRegister = (
    <div className="modal">
      <Register />
      <div className="btn_Cancel">
        <button className="cancel" onClick={handleClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
  const [openGroup, setOpenGroup] = useState(false);
  const handleOpenGroup = () => {
    setOpenGroup(true);
  };
  const handleCloseGroup = () => {
    setOpenGroup(false);
  };
  const bodyGroup = (
    <div className="modalGroup">
      <GroupAdd />
      <div className="btn_Cancel">
        <button className="cancel" onClick={handleCloseGroup}>
          Cancelar
        </button>
      </div>
    </div>
  );

  const [openTeacher, setOpenTeacher] = React.useState(false);

  const handleOpenTeacher = () => {
    setOpenTeacher(true);
  };
  const handleCloseTeacher = () => {
    setOpenTeacher(false);
  };

  const viewProfile = (
    <div className="paper1">
      <ViewProfileAdmiTeacher teacher={teacher} />
      <div className="btn_Cancel">
        <p className="cancel1" onClick={handleCloseTeacher}>
          X
        </p>
      </div>
    </div>
  );

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", heigh: "40vh" }}>
        <CssBaseline />
        <AppBar open={open}>
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
              <div className="nav_bar">
                <MdMenu />
              </div>
            </IconButton>
            <Header filter={search} setSearch={setSearch} />
          </Toolbar>
        </AppBar>
        <div className="nav_drawer">
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
              <BarMenu />
            </List>
          </Drawer>
        </div>
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
            <section className="mainCard">
              {loading ? (
                <p>Cargando</p>
              ) : character.length > 0 ? (
                <>
                  <div className="borde">
                    <NavLink
                      to={`/Usuario_Administrador/${teacher.documentoDocente}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card1 sx={{ maxWidth: 170 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="120"
                            image={teacher.fotoDocente || foto}
                            alt={teacher.nombreDocente}
                            onClick={handleOpenTeacher}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {teacher.nombreDocente}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {teacher.curso}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card1>
                    </NavLink>
                  </div>
                  <Modal open={openTeacher} onClose={handleCloseTeacher}>
                    {viewProfile}
                  </Modal>
                  {character.map((course, index) => (
                    <MainAdmi key={index} course={course} />
                  ))}
                </>
              ) : (
                <p>
                  No Tiene estudiantes <strong>"{search}"</strong>.
                </p>
              )}
            </section>
            {/* <MainAdmi /> */}
          </Container>
        </Box>
      </Box>
      <div className="nav_menu-phone">
        <Box
          sx={{
            width: "100vw",
            display: "absolute",
            borderTop: "1px solid #808080",
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label=""
              icon={
                <NavLink to="/Administrador">
                  <IoMdHome />
                </NavLink>
              }
            />
            <BottomNavigationAction
              label=""
              icon={<IoMdPersonAdd onClick={handleOpen} />}
            />
            <BottomNavigationAction
              label=""
              icon={<MdGroupAdd onClick={handleOpenGroup} />}
            />
            <BottomNavigationAction
              label=""
              icon={<IoExitOutline onClick={() => signOff()} />}
            />
          </BottomNavigation>
          <Modal open={modalRegisterUsers} onClose={handleClose}>
            {bodyRegister}
          </Modal>
          <Modal open={openGroup} onClose={handleCloseGroup}>
            {bodyGroup}
          </Modal>
        </Box>
      </div>
    </ThemeProvider>
  );
};
const cookies = new Cookies();

const signOff = () => {
  cookies.remove("idAdministrador", { path: "/" });
  localStorage.clear();
  window.location.href = "/";
};
