import "./Main.css";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Card } from "../../IU/Card/Card";
import { NavLink } from 'react-router-dom';
import { Search } from "../../IU/Search/Search";
import React, { useEffect, useState } from "react";

export const Main = () => {

  //token course
  const UrlTokenCourse = "http://localhost:4000/v3/courses";

  useEffect(() => {
    const getCourses = () => {
      axios.get(UrlTokenCourse)
        .then((res) => {
          const token = jwtDecode(res.data)
          setloading(false)
          setCourses(token.results[0])
        })
        .catch((error) => console.log(error))

    };
    getCourses();
  }, []);


  const [loading, setloading] = useState(true)
  const [buscar, setBuscar] = useState("")
  const [courses, setCourses] = useState([]);

  const UrlBuscarCourse = "http://localhost:4000/v1/courses/0" + buscar;

  useEffect(() => {
    const getBuscar = () => {
      axios.get(UrlBuscarCourse)
        .then((res) => user(res.data))
        .catch((error) => console.log(error))

    }
    getBuscar();
  }, []);

  const user = (data) => {
    setloading(false)
    setCourses(data.results[0])
  }

  const personaje = courses.filter((personaje) =>
    personaje.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
  )

  return (
    <div>
      <Search filter={buscar} setBuscar={setBuscar} />
      <section className="mainCard">
        {loading ? (
          <p>Cargando</p>
        ) : personaje.length > 0 ? (
          personaje.map((course, index) => (
            <NavLink to={`/Estudiantes_Administrador/${course.nombre}`}>
              <Card key={index} course={course} />
            </NavLink>
          ))
        ) : (
          <p>No se encontro el Grupo {' '}<strong>"{buscar}"</strong>.</p>
        )}
      </section>
    </div>
  );
};
