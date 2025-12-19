import { useRef } from 'react'
export const UseRef = () => {
    const inputref=useRef(null);
    const h1ref = useRef('');
    
    const inputHandler = () =>{
        console.log(inputref);
        inputref.current.focus();
        inputref.current.style.color='red'
        inputref.current.placeholder="Enter Password"
    }

    const ToggleHandler = () =>{
        if(inputref.current.style.display !='none'){
            inputref.current.style.display='none'
        }
        else{
            inputref.current.style.display='inline'
        }
    }

    const handleH1ref = () =>{
        h1ref.current.style.color="Red"
        h1ref.current.style.backgroundColor="green"
    }

  return (
    <div>
        <h1>UseRef Hook in React JS</h1>
        <button onClick={ToggleHandler}>Toogle Button</button>
        <input ref={inputref} type='text' placeholder='Enter your Name'/>
        <button onClick={inputHandler}>Focus on Input Field</button>
        <h1 ref={h1ref}>Naman Yadav</h1>
        <button onClick={handleH1ref}>Change Color</button>
    </div>
  )
}
