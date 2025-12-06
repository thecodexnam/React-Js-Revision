const Wrapper = ({children,color="Red"}) =>{
    return(
        <div style={{color:color,border:"3px solid black",width:"300px",padding:"10px",margin:"10px"}}>
            {children}
        </div>
    )
}

export default Wrapper;