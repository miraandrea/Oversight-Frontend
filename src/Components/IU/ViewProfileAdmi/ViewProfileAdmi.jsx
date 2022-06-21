import axios from "axios";
import './ViewProfileAdmi.css'
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";

//components
import { CardStudent } from '../CardStudent/CardStudent';
import foto from '../ImgProfile/student.jpg'

//librerias
import jwtDecode from "jwt-decode";
import swal from '@sweetalert/with-react';

export const ViewProfileAdmi = ({ courseStudent }) => {

  //editar
  const UrlStudent1 = "http://localhost:4000/v1/students/" + courseStudent.estudianteDocumento;

  const [document, setDocument] = useState("")
  const [nameStudent, setNameStudent] = useState("")
  const [lastName, setLastName] = useState("")
  const [genre, setGenre] = useState(courseStudent.genero)
  const [signature, setSignature] = useState(null)
  const [dateOfBirth, setDateOfBirth] = useState(courseStudent.fecnac)
  const [image, setImage] = useState(null)
  const [course, setCourse] = useState("");

  let formdata = new FormData()

  const format = (e) => {

    formdata.append("newDocument", document)
    formdata.append("name", nameStudent)
    formdata.append("lastName", lastName)
    formdata.append("dateOfBirth", dateOfBirth)
    formdata.append("genre", genre)
    formdata.append("signature", signature)
    formdata.append("idcourse", course)
    formdata.append("image", image)

    console.log(e.preventDefault());
    axios.put(UrlStudent1, formdata)
      .then((response) => getToken(response.data))
      .catch((error) => console.log(error))
  }

  const getToken = (data) => {
    const urlToken = "http://localhost:4000/v1/decode/" + data;
    axios.get(urlToken).then((response) => {
      getMessage(response.status);
    });
  }

  const getMessage = (data) => {
    if (data == 200) {
      {
        swal("Exito!", "Se actualizo exitosamente", "success")
        window.location.reload()
      }
    } else {
      swal("Oops!", "No se pudo actualizar", "error");
    }
  }

  //historial 

  const { name } = useParams()
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const getRecord = () => {
      axios.get(`http://localhost:4000/v2/students/${name}/observers`)
        .then((res) => {
          const token = jwtDecode(res.data)
          setRecord(token.results)
        })
        .catch((error) => console.log(error))
    };
    getRecord();
  }, []);

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

  // Rol courses
  const [data, setData] = useState([" "]);

  const user = (data) => {
    const urlCourse = "http://localhost:4000/v1/decode/" + data;
    axios.get(urlCourse).then((response) => {
      setData(response.data[0]);
    });
  }

  return (
    <div>
      <img src={courseStudent.fotoEstudiante || foto} alt="photo" className="photoView" />
      <form onSubmit={format} >
        <div className='centerInfor'>
          <div className='information'>
            <input type="text" defaultValue={courseStudent.estudianteNombre} onChange={(e) => setNameStudent(e.target.value)} />
            <input type="text" defaultValue={courseStudent.estudianteApellido} onChange={(e) => setLastName(e.target.value)} />
            <input type="text" defaultValue={courseStudent.estudianteDocumento} onChange={(e) => setDocument(e.target.value)} />
            <input type="file" onChange={e => setImage(e.target.files[0])} />
            <select
              className="select"
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>{courseStudent.curso}</option>
              {data.map((el, index) => {
                return (
                  <option key={index} value={el.idcurso}>
                    {el.nombre}
                  </option>
                );
              })}
            </select>
            <p>Estudiante</p>
          </div>
        </div>
        <div className="iconRecord">
          <AiOutlineFileSearch />
          <p>Historial</p>
        </div>
        <div className='centerOver'>
          <div className='OverFlow'>
            <div className="cards1" >
              <div className="cardInfo1">
                {record.length > 0 ? (
                  record.map((course2, index) => (
                    <CardStudent key={index} course2={course2} />
                    ))
                    ) : (
                      <div className='mensaje2' >
                    <p className='mensaje' >No tiene anotaciones</p>

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='prueba'>
          <div className='centerBtn' >
            <div className="btn_Cancel1">
              <button type="submit" className='update' onClick={format} >Actualizar</button>
              <button className="disable" >Deshabilitar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
};