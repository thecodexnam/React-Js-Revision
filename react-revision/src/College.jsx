import React from "react";
import Student from "./Student";

const College = ({college}) => {
  return (
    <div style={{
      background:"lightblue",
      borderRadius:"10px",
      border:"2px solid",
      margin:"20px",
      width:"400px",
      padding:"15px",
      borderBottom:"5px solid black"
    }}>
      <h1>College Name : {college.name}</h1>
      <ul>
        <li>City: {college.city}</li>
        <li>Website: {college.website}</li>
        <Student student={college.student} />
      </ul>
    </div>
  )
};

export default College;
