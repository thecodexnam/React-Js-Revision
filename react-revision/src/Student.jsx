import React from 'react'

const Student = ({student}) => {
  return (
    <div>
        <h3>Students:</h3> {
          student.map((student,index)=>(
            <ul key={index}>
                <li>{student.name}</li>
            </ul>
            ))
          }
    </div>
  )
}

export default Student;