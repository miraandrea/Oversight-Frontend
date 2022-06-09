import "./Header.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Search } from "../../IU/Search/Search";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React, { useState, useEffect } from "react";
import { AvatarProfile } from "../../IU/AvatarProfile/AvatarProfile";
import { logRoles } from "@testing-library/react";

export const Header = ({ search, setSearch }) => {

  const handleGoViewProfile = () => {
    return (window.location = "/perfil");
  };

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
    <div className="containerHeader">
      <Typography
        component="h1"
        variant="h4"
        color="inherit"
        noWrap
        sx={{ flexGrow: 0.5 }}
        fontFamily="pacifico">
        Oversigth
      </Typography>
      <Search search={search} setSearch={setSearch} />
      <IconButton color="inherit" onClick={handleGoViewProfile}>
        {photos.length > 0 ? (
          photos.map((photo, index) => {
            return <AvatarProfile key={index} name={photo.nombre} photo={photo.foto} />;
          })
        ) : (
          <AvatarProfile />
        )}
      </IconButton>
    </div>
  );
};