import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../IU/Card/Card";
import "./Main.css";

export const Main = () => {
  
  const URL = "http://localhost:4000/v1/courses";

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = () => {
      axios
        .get(URL)
        .then((response) => response)
        .then((data) => {
          setCourses(data.data);
        })
        .catch((error) => console.log(error));
    };
    getCourses();
  }, []);

  const paola = courses.map((course, index) => {
    return (
      <div>
        <h1 key={course.index} course={course} />
      </div>
    );
  })
  console.log(paola);

  return (
    <div className="mainCard">
      {courses.map((course, index) => {
        return (
          <div>
            <Card key={index} course={course} />
          </div>
        );
      })}
    </div>
  );
};
