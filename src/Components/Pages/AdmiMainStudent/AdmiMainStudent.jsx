import React from "react";
import { BarMenu } from "../../Layout/BarMenu/BarMenu";
import { Header } from "../../Layout/Header/Header";
import { MainAdmi } from "../../Layout/MainAdmi/MainAdmi";
import "../AdmiMainStudent/AdmiMainStudent.css"
export const AdmiMainStudent = () => {

  return (
    <div>
      <Header  />
      <BarMenu />
      <MainAdmi />
    </div>
  );
};
