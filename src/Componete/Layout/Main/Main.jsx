import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { Card } from "../../IU/Card/Card";
import { Search } from "../../IU/Search/Search";
import "./Main.css";
import { NavLink } from 'react-router-dom'

export const Main = () => {

<<<<<<< HEAD
=======
  // const {busqueda} = useParams()
>>>>>>> 68acad9f889d6a6b67f79204990d23ac0de663aa
  //token course
  const UrlTokenCourse = "http://localhost:4000/v3/courses";

  useEffect(() => {
    const getCourses = () => {
      axios.get(UrlTokenCourse)
        .then((res) => user(res.data))
        .catch((error) => console.log(error))

    };
    getCourses();
  }, []);


  const [loading, setloading] = useState(true)
  const [buscar, setBuscar] = useState("")

  const [courses, setCourses] = useState([]);

  const user = (data) => {
    const token = jwtDecode(data)
<<<<<<< HEAD
=======
    console.log(token.results[0]);
>>>>>>> 68acad9f889d6a6b67f79204990d23ac0de663aa
    setloading(false)

    setCourses(token.results[0])
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
<<<<<<< HEAD
            <NavLink to={`/Estudiantes_Administrador/${course.nombre}`}>
              <Card key={index} course={course} />
            </NavLink>
=======
            <Card key={index} course={course} />
>>>>>>> 68acad9f889d6a6b67f79204990d23ac0de663aa
          ))
        ) : (
          <p>No se encontro el Grupo {' '}<strong>"{buscar}"</strong>.</p>
        )}
      </section>
    </div>
  );
};
