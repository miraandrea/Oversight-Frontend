import React from "react";
import { BarMenuTeacher } from "../../Layout/BarMenuTeacher/BarMenuTeacher";
import { Header } from "../../Layout/Header/Header";
import { MainTeacher } from "../../Layout/MainTeacher/MainTeacher";

export const TeachMainMenu = () => {
  return (
    <div>
      <Header />
      <BarMenuTeacher />
      <MainTeacher />
    </div>
  );
};
