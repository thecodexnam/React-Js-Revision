import React from 'react'

const LoopinJSX = () => {

    const UserData = [
       { Name:"Naman",
        age:20,
        Address:"31B/1 Najafgarh, New Delhi - 110043",
        email:"namantest@gmail.com",
        id:1
       },
       { Name:"Daman",
        age:29,
        Address:"House-21 Mistic Fall, England - 5452",
        email:"damontest@gmail.com",
        id:2
       },
       { Name:"Stefen",
        age:23,
        Address:"House-210 Mistic Fall, England - 5452",
        email:"stefentest@gmail.com",
        id:3
       }    
    ]

  return (
    <div>
    <h1>Loop in JSX with Map Function</h1>
    <table border={1}>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
                <td>Address</td>
            </tr>
        </thead>
        <tbody>
            {
            UserData.map((user)=>( 
                <tr key={user.id}> {/* Key help React track each row */}
                    <td>{user.id}</td>
                    <td>{user.Name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.Address}</td>
                </tr>
            ))
            }
        </tbody>
    </table>




    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Dummy Data</h1>
    <table border={1}>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Naman</td>
                <td>namantest@gmai.com</td>
                <td>20</td>
            </tr>
        </tbody>
    </table>



    </div>
  )
}

export default LoopinJSX