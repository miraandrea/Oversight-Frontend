import "./Search.css";
import React from "react";
import { MdPersonSearch } from "react-icons/md";

export const Search = ({ buscar, setBuscar, ClassInputSearch }) => {

  const input = ({ target }) => {
    setBuscar(target.value)
  }

  return (
    <div className="search">
      <input type="text" name="Search" placeholder="Buscar" onChange={input} value={buscar} className={ClassInputSearch} />
      <div className="iconsearchCont">
        <MdPersonSearch className="iconsearch" />
      </div>
    </div>
  );
};
