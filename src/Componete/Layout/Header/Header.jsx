import React from "react";
import { ImgProfile } from "../../IU/ImgProfile/ImgProfile";
import { Search } from "../../IU/Search/Search";
import { TextOversight } from "../../IU/TextOversight/TextOversight";
import "./Header.css";


export const Header = () => {
  return (
    <div className="headerStudent">
      <div className="contTitleStudent">
        <TextOversight text='textStudent'/>
      </div>
      {/* <div className="contPrueba">
        <input type="text" placeholder="a" className="inputPrueba" />
      </div> */}
      <div className="contImageStudent">
        <ImgProfile img='imgStudent'/>
      </div>
  </div>
  );
};
