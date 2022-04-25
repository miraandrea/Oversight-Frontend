import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../IU/Card/Card";
import { Search } from "../../IU/Search/Search";
import "./Main.css";

export const Main = () => {

  const [loading, setloading] = useState(true)
  const [buscar, setBuscar] = useState("")

  let llamarToken = localStorage.getItem('tokenCurse');
  const urlCurse = "http://localhost:4000/v1/decode/" + llamarToken;


  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = () => {
      axios
        .get(urlCurse)
        .then((response) => response)
        .then((data) => {
          setCourses(data.data);
          setloading(false)
        })
        .catch((error) => console.log(error));
    };
    getCourses();
  }, []);

  const personaje = courses.filter((personaje) =>
    personaje.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
  )

  return (
    <div>
      <Search filter={buscar} setBuscar={setBuscar}/>
      <section >
        {loading ? (
          <p>Cargando</p>
        ) : personaje.length > 0 ? (
          <div className="mainCard">
            {personaje.map((course, index) => {
              return (
                <div>
                  <Card key={index} course={course} />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No se encontro el Personaje {' '}<strong>"{buscar}"</strong>.</p>
        )}
      </section>
    </div>
  );
};
