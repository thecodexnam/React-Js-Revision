function App() {

  let age = 20;
  const obj ={
    name:"Naman",
    email:"naman@gmail.com",
    passion:"Software Engineer"
  }
  const arr = ["naman","vishnu","rohan"]

  function operation(a,b,op){
    let result =0;
    if(op === "+"){
      return result = a+b;
    }
    if(op ==="-"){
     return result =  a-b;
    }
    else{
      return "Not Found"
    }
  } 

  return (
    <div>
      <h1>{operation(100,33,"-")}</h1>
      <h1>{age?age:"Age not found"}</h1>
      <h1>{obj.email}</h1>
      <h1>{arr[2]}</h1>
      

      {/* <h1>Naman Yadav</h1>
      <img
        src="https://imgs.search.brave.com/QRO8_ocyX5U489An7UlMJZb2SouOEsq5M-sqbvM94WM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2dldGlt/Z19haV9pbWctam9z/VkhCRW9GRjFXeGZP/Zk5DQXJkLmpwZWc"
        alt="Naman"
      />
      <ul>
        <li>Invert new traffic Light</li>
        <li>Reherce a Movie scene</li>
        <li>code daily for improvement</li>
      </ul>
      <button onClick={al}>Click ME</button> */}
    </div>
  );
}

export default App;
