import React, { useState, useEffect } from "react";
import "./Search.css";
import { MdPersonSearch } from "react-icons/md";
import axios from "axios";
import { Card } from "../Card/Card";
import { Main } from "../../Layout/Main/Main"

export const Search = ({ buscar, setBuscar }) => {

  const input = ({ target }) => {
    setBuscar(target.value)
  }

  return (
    <div className="search">
      <input type="text" name="Search" placeholder="Buscar" onChange={input} value={buscar}/>
      <div className="iconsearchCont">
      <MdPersonSearch className="iconsearch" />
      </div>
    </div>
  );
};
