//cambiar en proceso
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardAdmi } from "../../IU/CardAdmi/CardAdmi";
import "./MainAdmi.css";

export const MainAdmi = () => {

  const URL = "http://localhost:4000/v1/courses/:name";

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = () => {
      axios
        .get(URL)
        .then((response) => response)
        .then((data) => {
          setCourses(data.data);
        });
    };
    getCourses();
  }, []);

  return (
  
    <div className="mainCard">
      {courses.map((courseStudent, index) => {
        return (
          <div>
            <CardAdmi key={index} courseStudent={courseStudent} />
          </div>
        );
      })}
    </div>

  );
};
