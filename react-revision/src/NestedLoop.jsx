import React from "react";
import { use } from "react";
import College from "./College";

const NestedLoop = () => {
  const collegeData = [
    {
      name: "IGNOU",
      city: "Delhi",
      website: "www.ignou.com",
      student:[
        {name:"Naman",
         email:"codexnam@gmail.com",
         age:20
        },
        {name:"Vishnu",
         email:"vishnu@gmail.com",
         age:19
        },
        {name:"Poshak",
         email:"poshak@gmail.com",
         age:21
        },
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iit.com",
            student:[
        {name:"Naman",
         email:"codexnam@gmail.com",
         age:20
        },
        {name:"Vishnu",
         email:"vishnu@gmail.com",
         age:19
        },
        {name:"Poshak",
         email:"poshak@gmail.com",
         age:21
        },
      ]
    },
    {
      name: "Amity",
      city: "Noida",
      website: "www.amity.com",
            student:[
        {name:"Naman",
         email:"codexnam@gmail.com",
         age:20
        },
        {name:"Vishnu",
         email:"vishnu@gmail.com",
         age:19
        },
        {name:"Poshak",
         email:"poshak@gmail.com",
         age:21
        },
      ]
    },
    {
      name: "NIT",
      city: "Bangluru",
      website: "www.nit.com",
            student:[
        {name:"Naman",
         email:"codexnam@gmail.com",
         age:20
        },
        {name:"Vishnu",
         email:"vishnu@gmail.com",
         age:19
        },
        {name:"Poshak",
         email:"poshak@gmail.com",
         age:21
        },
      ]
    },
  ];

  return (
    <div>
      {/* <h1>Nested Loop with Component</h1> */}
      {
        collegeData.map((college,index)=>(
        <div key={index}>
            <College college={college}/>
        </div>
        ))
      }
    </div> 
  );
};

export default NestedLoop;
