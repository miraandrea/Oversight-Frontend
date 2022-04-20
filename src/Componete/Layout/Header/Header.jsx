import React from "react";
import { ImgProfile } from "../../IU/ImgProfile/ImgProfile";
import { Search } from "../../IU/Search/Search";
import { TextOversight } from "../../IU/TextOversight/TextOversight";
import "./Header.css";


export const Header = () => {
  return (
  <div>
    <div className="center">
        <div className="headercenter">
          <TextOversight text="oversight-text" />
          <Search />
          <ImgProfile />
    </div>
        <div className="hrtop">
          <hr />
        </div>
        </div>
  </div>
  );
};
