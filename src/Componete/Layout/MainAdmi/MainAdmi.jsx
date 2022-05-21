//cambiar en proceso
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardAdmi } from "../../IU/CardAdmi/CardAdmi";
import "./MainAdmi.css";
import { useParams } from "react-router";
import { Search } from "../../IU/Search/Search";
import { NavLink } from "react-router-dom";

export const MainAdmi = () => {


  const { name } = useParams()

  console.log(name);

  const URL = "http://localhost:4000/v1/courses/" + name;

  const [loading, setloading] = useState(true)
  const [buscar, setBuscar] = useState("")
  const [courses, setCourses] = useState([]);
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getCourses = () => {
      axios
        .get(URL)
        .then((response) => {
          setCourses(response.data)
          setTeacher(response.data[0])
          setloading(false)
        });
    };
    getCourses();
  }, []);

  
  const personaje = courses.filter((personaje) =>
    personaje.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
  )
  
  return (

    <div>
      <Search filter={buscar} setBuscar={setBuscar} />
      <section className="mainCard">
            <div className="cardTeacher">
                {/* <img src={teacher.foto || foto } alt={teacher.nombreDocente} onClick={handleOpenGroup} />  */}
                <p>{teacher.nombreDocente} {teacher.apellidoDocente}</p>
                <p>{teacher.documentoDocente}</p>
                <p>{teacher.curso}</p>
            </div>
        
        {loading ? (
          <p>Cargando</p>
        ) : personaje.length > 0 ? (
          personaje.map((courseStudent, index) => (
            <NavLink to={`/Estudiantes_Administrador/${courseStudent.estudianteDocument}`}>
              <CardAdmi key={index} courseStudent={courseStudent} />
            </NavLink>
          ))
        ) : (
          <p>No se encontro <strong>{buscar}</strong>.</p>
        )}
      </section>
    </div>
  );
};