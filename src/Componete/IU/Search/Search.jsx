import React from "react";
import "./Search.css";
import { MdPersonSearch } from "react-icons/md";

export const Search = () => {
  return (
    <div className="search">
      <input type="text" name="Search" id="" placeholder="Buscar" />{" "}
      <MdPersonSearch className="iconsearch" />
    </div>
  );
};
