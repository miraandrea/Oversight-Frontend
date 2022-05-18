import React, { useEffect, useState } from "react";
import "./GroupAdd.css";
import { MdGroupAdd } from "react-icons/md";
import axios from "axios";

export const GroupAdd = () => {

  //token teacher

  const UrlTokenTeacher = 'http://localhost:4000/v1/teachers';

  useEffect(() => {
    const getTeacher = () => {
      axios.get(UrlTokenTeacher)
        .then((res) => userTeacher(res.data))
        .catch((error) => console.log(error))
    }
    getTeacher();
  }, []);

  const [data, setData] = useState([" "]);

  const userTeacher = (data) => {
    const urlTeacher = "http://localhost:4000/v1/decode/" + data;
    axios.get(urlTeacher).then((response) => {
      console.log("response", Object.keys(response.data).length);
      let dataArray = [];
      for (let index = 0; index < Object.keys(response.data[0]).length; index++) {
        console.log("response2");
        dataArray.push(response.data[0][index]);
      }
      setData(dataArray);
    });
  }

  //imagen

  const [teacher, setTeacher] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState(null)
  const [messageGroup, setMessageGroup] = useState("");

  let f = new FormData()
  const insertar = (e) => {

    e.preventDefault()

    f.append("name", name)
    f.append("image", image)
    f.append("documentTeacher", teacher)

    console.log(image)

    axios.post("http://localhost:4000/v5/courses", f, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(res => {
        userGroup(res.data);
      })
      .catch(error => console.log(error))

    }
    const userGroup = (data) =>{
      if (data) {
        const paragrapg = "Se registro";
        setMessageGroup(paragrapg);
      }
      else {
        const paragrapg = "No se pudo registrar";
        setMessageGroup(paragrapg);
      }
    }

  return (
    <form onSubmit={insertar}>
      <div>
        <p className="nameGroup">Agregar grupo</p>
        <MdGroupAdd className='iconGroup' />
        <div className="mainGroup">
          <br />
          <hr className="line5" />
          <div className="containerGroup">
            <div className="last">
              <input className="userNameGroup" id="name" type="text" placeholder="Nombre Grupo" required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="photoGroup">
              <input type="file" className="inputfile" onChange={e => setImage(e.target.files[0])} />
            </div>
            <br />
            <div className="selectDirector">
              <select
                className="desple"
                onChange={(e) => setTeacher(e.target.value)}>
                <option>Seleccione un director de grupo</option>
                {data.map((el, index) => {
                  return (
                    <option key={index}
                      value={el.documento}>
                      {el.nombre}
                    </option>
                  );
                })}
              </select>
              <p className="message">{messageGroup}</p>
            </div>
          </div>
        </div>
        <div className="btn_Registrar">
          <button type="submit" className="Registrar">Registrar</button>
        </div>
      </div>
    </form>
  );
};