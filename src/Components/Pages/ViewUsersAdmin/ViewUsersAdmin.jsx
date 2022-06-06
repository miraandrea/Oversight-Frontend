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
import { Header } from '../../Layout/Header/Header';
import CssBaseline from "@mui/material/CssBaseline";
import { BarMenu } from '../../Layout/BarMenu/BarMenu';
import { MainAdmi } from '../../Layout/MainAdmi/MainAdmi';
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  MdMenu,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { Register } from "../../IU/Register/Register";
import { GroupAdd } from "../../IU/GroupAdd/GroupAdd";


import { MdGroupAdd } from "react-icons/md";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { IoMdHome, IoMdPersonAdd } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import Modal from "@material-ui/core/Modal";
import { NavLink } from "react-router-dom";


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
      .then((response) => setPhotos(response.data[0].foto))
      .catch((error) => console.log(error));
  };

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const logOut = () => {
    return (window.location = "/");
  };
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex",heigh:"40vh" }}>
        <CssBaseline />
        <AppBar open={open} >
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
            <Header />
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
            <MainAdmi />
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
            <BottomNavigationAction label="" icon={
              <NavLink to="/Administrador">
                <IoMdHome />
              </NavLink>} />
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
}
const cookies = new Cookies();

const signOff = () => {
  cookies.remove("idAdministrador", { path: "/" });
  localStorage.clear();
  window.location.href = "/";
};
