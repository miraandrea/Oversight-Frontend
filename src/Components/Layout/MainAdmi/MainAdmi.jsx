import "./MainAdmi.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardAdmi } from "../../IU/CardAdmi/CardAdmi";
import { useParams } from "react-router";
import { Search } from "../../IU/Search/Search";
import { NavLink } from "react-router-dom";
import foto from '../../IU/ImgProfile/student.jpg'
import { ViewProfileAdmi } from "../../IU/ViewProfileAdmi/ViewProfileAdmi";
import Modal from "@material-ui/core/Modal";

export const MainAdmi = () => {


  const { name } = useParams()

  console.log(name);

  const URL = "http://localhost:4000/v1/courses/" + name;

  const [loading, setloading] = useState(true)
  const [search, setSearch] = useState("")
  const [courses, setCourses] = useState([]);
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getCourses = () => {
      axios
        .get(URL)
        .then((response) => {
          console.log(response.data);
          setCourses(response.data)
          setTeacher(response.data[0])
          setloading(false)
        });
    };
    getCourses();
  }, []);

  
  const personaje = courses.filter((personaje) =>
    personaje.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  //modal
  const [openGroup, setOpenGroup] = React.useState(false);

    const handleOpenGroup = () => {
        setOpenGroup(true);
      };
    const handleCloseGroup = () => {
        setOpenGroup(false);
      };

      const viewProfile = (
        <div className="paper1">
          <ViewProfileAdmi />
          <div className="btn_Cancel">
            <p className="cancel1" onClick={handleCloseGroup}>X</p>
          </div>
        </div>
      )
  
  return (

    <div>
      <Search filter={search} setSeacrh={setSearch} />
      <section className="mainCard">
        
        {loading ? (
          <p>Cargando</p>
        ) : personaje.length >  0 ? (
          personaje.map((courseStudent, index) => (
            <>
            <NavLink to={`/Usuario_Administrador/${courseStudent.estudianteDocumento}`} style={{ textDecoration: 'none' }}>
              <CardAdmi key={index} courseStudent={courseStudent} />
            </NavLink>
            {/* <div className="cardTeacher">
            <img src={teacher.fotoDocente || foto } alt={teacher.nombreDocente} onClick={handleOpenGroup} /> 
            <p>{teacher.nombreDocente} {teacher.apellidoDocente}</p>
            <p>{teacher.documentoDocente}</p>
            <p>{teacher.curso}</p>
          </div>
          <Modal open={openGroup} onClose={handleCloseGroup}>
              {viewProfile}
          </Modal> */}
          </>
          ))
        ): (
          <p>No se encontro <strong>{search}</strong>.</p>
        )}
      </section>
    </div>
  );
};