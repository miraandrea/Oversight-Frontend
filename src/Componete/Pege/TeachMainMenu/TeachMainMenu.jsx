import React from "react";
import { Noback } from "../../IU/PrivaterRoute/Noback";
import { BarMenuTeacher } from "../../Layout/BarMenuTeacher/BarMenuTeacher";
import { Header } from "../../Layout/Header/Header";
import { MainTeacher } from "../../Layout/MainTeacher/MainTeacher";

export const TeachMainMenu = () => {
  return (
    <div>
      <Header />
      <BarMenuTeacher />
      <MainTeacher />
      <script src={<Noback />}/>
    </div>
  );
};
