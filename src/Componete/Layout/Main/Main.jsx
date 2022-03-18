import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from '../../IU/Card/Card'

export const Main = () => {

  const URL = 'http://localhost:8080/api/courses'

  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = () =>{
      axios.get(URL)
      .then((response) => response)
      .then((data) => {
        setCourses(data.data)
      })
    }
    getCourses()
  }, [])

  return (
    <div>
       {courses.map((course) =>{
          return <Card key={course.idcurso} course={course} />
        })}
    </div>
  )
}