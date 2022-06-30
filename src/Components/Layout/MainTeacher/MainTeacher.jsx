import { CardTeacher } from "../../IU/CardTeacher/CardTeacher";
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from "react";

export const MainTeacher = ({ course1 }) => {

  return (
    <div>
      <NavLink to={`/Usuario_Docente/${course1.curso}`} style={{ textDecoration: 'none' }}>
        <CardTeacher course1={course1} />
      </NavLink>
    </div>
  );
};
