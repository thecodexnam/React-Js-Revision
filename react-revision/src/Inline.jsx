import React, { useState } from "react";

const Inline = () => {
  const [cardStyle, setcartStyle] = useState({
    backgroundColor: "yellowgreen",
    width: "212px",
    border: "1px solid",
    borderRadius: "10px",
    boxShadow: "1px 2px 1px 2px #2f2c2cff",
    margin: "10px",
  });

  // const cardStyle = {}

  const updateTheme = (bgcolor,textColor) => {
    //  console.log(bgcolor)
    //  console.log(textColor)
    setcartStyle({...cardStyle,backgroundColor:bgcolor})
    setTextcolor(textColor)
  }

  
  const[textColor,setTextcolor] = useState('black')
    const[grid,setGrid] = useState(false)

  return (
    <div>
      <h1
        style={{
          backgroundColor: "yellow",
          width: "300px",
          borderRadius: "10px",
        }}
      >
        Inline Css in React js
      </h1>
      <button onClick={()=>updateTheme('#ccc','red')}>Grey Theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
      <button onClick={()=>updateTheme('black','white')}>Dark Theme</button>
      <button onClick={()=>updateTheme('yellowgreen','black')}>Green Theme</button>
      <button onClick={()=>setGrid(!grid)}>Toogle</button>

<div style={{display: grid?'flex':'block',flexWrap:'wrap'}}>
        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>

                <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>

                <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>

        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>

                <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>

                        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>
                        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>
                        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>
                        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>
                        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>
                        <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>

                <div style={cardStyle}>
          <img
            style={{
              borderRadius: "50%",
              height: "200px",
              display: "flex",
              marginLeft: "5.5px",
              display:'flex'
            }}
            src="https://imgs.search.brave.com/YKx8-3qRmkv9oeoZmSugrki_AFZEH0qd_t7Qdu649jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        <div style={{color:textColor}}>
        <h2>Name:Naman Yadav</h2>
          <h4>Software Developer</h4>
          <h2>Course : BCA</h2>
          <h2>University: IGNOU</h2>

        </div>
        </div>
</div>

    </div>
  );
};

export default Inline;
