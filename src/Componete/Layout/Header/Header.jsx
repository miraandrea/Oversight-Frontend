import "./Header.css";
import React from "react";
import { ImgProfile } from "../../IU/ImgProfile/ImgProfile";
import { TextOversight } from "../../IU/TextOversight/TextOversight";


export const Header = () => {
  return (
    <div className="headerStudent">
      <div className="contTitleStudent">
        <TextOversight text='textStudent' />
      </div>
      <div className="contImageStudent">
        <ImgProfile img='imgStudent' />
      </div>
    </div>
  );
};
